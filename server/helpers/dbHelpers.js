const axios = require("axios");
module.exports = (db) => {
  const generateRandomString = function () {
    let string = "";
    const chars =
      "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i <= 6; i++) {
      string += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return string;
  };
  const getLocation = () => {
    const query = {
      text: "SELECT * FROM location",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const CreateChatUser = () => {
    getUsers()
      .then((users) => {
        console.log("CREATE CHAT USER WORKING>", users);
        return users;
      })
      .then((users) => {
        users.map((user) => {
          axios
            .put(
              `https://api.chatengine.io/users/`,
              {
                username: user.name,
                secret: user.secret,
              },
              { headers: { "Private-Key": process.env.C_SECRETKEY } }
            )
            .then((response) => {
              console.log("RESPONSE FOR CHAT", response.data);
            });
        });
      })

      .catch((err) => console.log("error: >>>>***", err));
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => (result.rows ? result.rows[0] : undefined))
      .catch((err) => err);
  };

  //GET USER BY ID

  const getUserById = (id) => {
    const query = {
      text: `SELECT * FROM users WHERE id = $1`,
      values: [id],
    };

    return db
      .query(query)
      .then((result) => (result.rows ? result.rows[0] : undefined))
      .catch((err) => err);
  };

  //TODO: ADD OTHER VALUES
  const addUser = async (
    name,
    email,
    password,
    bio,
    avatar,
    team_id,
    secret
  ) => {
    const query = {
      text: `INSERT INTO users (name, email, password, bio, avatar, team_id, secret) VALUES ($1, $2, $3, $4, $5, $6, $7) returning *`,
      values: [name, email, password, bio, avatar, team_id, secret],
    };

    return db
      .query(query)
      .then(async (result) => {
        console.log("DB HELPERS RESULT >>>", result);
        await axios
          .put(
            `https://api.chatengine.io/users/`,
            {
              username: name,
              secret,
            },
            { headers: { "Private-Key": process.env.C_SECRETKEY } }
          )
          .then((response) => {
            console.log("RESPONSE FOR CHAT", response.data);
          })
          .catch((err) => {
            console.log("CHAT ERROR>>", err);
          });
        return result.rows[0];
      })
      .catch((err) => err);
  };

  //GET TEAMS

  const getTeams = () => {
    const query = {
      text: "SELECT * FROM teams",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  //Get Team By Name. (Edge case in case team already exists)

  const getTeamByName = (team_name) => {
    const query = {
      text: "SELECT * FROM teams WHERE team_name = $1",
      values: [team_name],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  // Add teams to database.

  const addTeam = (location_id, team_name, team_description, avatar) => {
    const query = {
      text: "INSERT INTO teams (location_id, team_name, team_description, avatar) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [location_id, team_name, team_description, avatar],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //GET MATCHES

  const getMatchesTeam = () => {
    const query = {
      text: "SELECT * FROM team_matches",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getMatchesPlayer = () => {
    const query = {
      text: "SELECT * FROM player_matches",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  //Get matches By Id. (Edge case in case id already exists)

  const getMatchById = (id) => {
    const query = {
      text: "SELECT * FROM teams WHERE id = $1",
      values: [id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  // Add match to database.

  const addMatchTeam = (
    date,
    team1_id,
    team2_id,
    winner_id,
    team1_score,
    team2_score
  ) => {
    const query = {
      text: "INSERT INTO team_matches (date, team1_id, team2_id, winner_id, team1_score, team2_score) VALUES ($1, $2, $3, $4, $5, $6)RETURNING *",
      values: [date, team1_id, team2_id, winner_id, team1_score, team2_score],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addMatchPlayer = (
    date,
    player1_id,
    player2_id,
    winner_id,
    player1_score,
    player2_score
  ) => {
    const query = {
      text: "INSERT INTO player_matches (date, player1_id, player2_id, winner_id, player1_score, player2_score) VALUES ($1, $2, $3, $4, $5, $6)RETURNING *",
      values: [
        date,
        player1_id,
        player2_id,
        winner_id,
        player1_score,
        player2_score,
      ],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const getChallengesById = (user_id) => {
    const query = {
      text: "SELECT * FROM challenge_request WHERE user_id = $1",
      values: [user_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const setChallengeById = (newStatus, user_id, challenge_request_id) => {
    const query = {
      text: "UPDATE challenge_request SET request_status=$1 WHERE user_id = $2 AND challenge_request.id = $3",
      values: [newStatus, user_id, challenge_request_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const addChallenge = (
    challenger_id,
    user_id,
    location_id,
    date,
    challenge_message,
    request_status
  ) => {
    const query = {
      text: "INSERT INTO challenge_request (challenger_id, user_id, location_id, date, challenge_message, request_status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      values: [
        challenger_id,
        user_id,
        location_id,
        date,
        challenge_message,
        request_status,
      ],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
  // const getDataForHome = () => {
  //   //qeuries for data
  // }

  return {
    getUsers,
    getUserByEmail,
    getUserById,
    getLocation,
    addUser,
    getTeams,
    getTeamByName,
    addTeam,
    getMatchesTeam,
    getMatchesPlayer,
    getMatchById,
    addMatchTeam,
    addMatchPlayer,
    getChallengesById,
    addChallenge,
    setChallengeById,
    generateRandomString,
    CreateChatUser,
  };
};
