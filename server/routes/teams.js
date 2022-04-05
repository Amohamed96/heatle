const express = require('express');
const router = express.Router();
const {
    getPostsByTeams
} = require('../helpers/dataHelpers');

module.exports = ({
    getTeams,
    getTeamByName,
    addTeam
}) => {
    /* GET Team listing. */
    router.get('/', (req, res) => {
        getTeams()
            .then((teams) => {
              res.json(teams)
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });
    router.post('/', (req, res) => {

      const {
        location_id,
        team_name,
        team_description,
        avatar
      } = req.body;

      getTeamByName(team)
          .then(team => {

              if (team) {
                  res.json({
                      msg: 'Sorry, This team name is taken.'
                  });
              } else {
                  return addTeam(location_id,
                    team_name,
                    team_description,
                    avatar)
              }

          })
          .then(newTeam => res.json(newTeam))
          .catch(err => res.json({
              error: err.message
          }));

  })

    return router

  }