const express = require("express");
const router = express.Router();
const axios = require("axios");

//TODO OPTIMIZE FOR TEAMS
const {
  getChallengesById,
  getUserById,
  addChallenge,
  setChallengeById,
} = require("../helpers/dbHelpers");

module.exports = ({
  getUsers,
  getUserByEmail,
  addUser,
  getUserById,
  getChallengesById,
  addChallenge,
  setChallengeById,
  CreateChatUser,
  generateRandomString,
}) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => {
        res.json(users);
      })

      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  // GET USER BASED ON THEIR ID

  router.get(`/player/:id`, (req, res) => {
    const user_id = req.params.id;
    console.log("USER ID ROUTE", user_id);
    const usersPromise = getUserById(user_id);
    const challengesPromise = getChallengesById(user_id);
    Promise.all([usersPromise, challengesPromise])
      .then((result) => {
        console.log("RESULT ROUTE", result);
        console.log("REQS PARAMS ID", req.params.id);

        res.json({ users: result[0], challenges: result[1] });
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/signup", (req, res) => {
    const secret = generateRandomString();
    const { name, email, password, bio, avatar, team_id } = req.body;

    getUserByEmail(email)
      .then(async (user) => {
        if (user) {
          res.status(404).json({
            msg: "Sorry, a user account with this email already exists",
          });
        } else {
          const addPlayer = await addUser(
            name,
            email,
            password,
            bio,
            avatar,
            team_id,
            secret
          );
          console.log("ADD USER FUNCTIOn", addPlayer);
          return addPlayer;
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("PASSWORD ()####", email, password);
    getUserByEmail(email)
      .then(async (user) => {
        if (!user) {
          res.status(404).json({
            msg: "Sorry, please create an account",
          });
        } else {
          res.send({ user: user });
        }
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  router.post("/player/:id", async (req, res) => {
    const {
      challenger_id,
      user_id,
      location_id,
      date,
      challenge_message,
      request_status,
    } = req.body;
    // console.log("req params  server", req.params);
    console.log("req body  server====>", req.body);
    console.log("req body message  server====>", req.body.challenge_message);
    return addChallenge(
      req.body.challenger_id,
      req.body.user_id,
      req.body.location_id,
      req.body.date,
      req.body.challenge_message,
      req.body.request_status
    )
      .then(() => {
        // const sendChallenge = await
        // res.json(newChallenge);
        // return sendChallenge;
      })

      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.put("/player/:id", async (req, res) => {
    const { request_status, user_id, challenge_request_id } = req.body;
    console.log("BODY PUT:", req.body);
    return setChallengeById(request_status, user_id, challenge_request_id)
      .then(() => {
        // const sendChallenge = await
        // res.json(newChallenge);
        // return sendChallenge;
      })

      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  //TODO: make route for challenges GET and POST
  // router.get("/Pr", (req, res) => {
  //   getChallengesByID(2)
  //     .then((challenges) => {
  //       res.json(challenges);
  //     })
  //     .catch((err) =>
  //       res.json({
  //         error: err.message,
  //       })
  //     );
  // });

  return router;
};
