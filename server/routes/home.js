//return object containing array of users matches teams

const express = require("express");
const router = express.Router();

module.exports = ({ getUsers, getTeams, getMatchesPlayer, getMatchesTeam }) => {
  // Without promise all (data will load one by one)

  // router.get('/sync', async (req, res) => {
  //       const users = await getUsers()
  //       const teams = await getTeams()
  //       const matches = await getMatches()
  //         res.json({users: users, teams: teams, matches: matches})
  //   });

  router.get("/", async (req, res) => {
    const usersPromise = getUsers();
    const teamsPromise = getTeams();
    const matchesPromiseTeam = getMatchesTeam();
    const matchesPromisePlayer = getMatchesPlayer();

    Promise.all([
      usersPromise,
      teamsPromise,
      matchesPromiseTeam,
      matchesPromisePlayer,
    ])
      .then((result) => {
        res.json({
          users: result[0],
          teams: result[1],
          matchesTeam: result[2],
          matchesPlayer: result[3],
        });
      })
      .catch((error) => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  });
  return router;
};
