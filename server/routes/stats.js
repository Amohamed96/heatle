const express = require("express");
const router = express.Router();
const { getStats, addStats } = require("../helpers/dbHelpers");

module.exports = ({ getStats, addStats }) => {
  router.get("/", (req, res) => {
    getStats()
      .then((stats) => {
        res.json(stats);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    const { heatmap, attempts } = req.body;
    addStats(heatmap, attempts)
      .then((newStat) => {
        console.log("NEW STATISTIC ADDED", newStat);
        res.json(newStat);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
