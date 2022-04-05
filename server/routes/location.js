const express = require("express");
const router = express.Router();

module.exports = ({ getLocation }) => {
  router.get("/", (req, res) => {
    getLocation()
      .then((location) => {
        res.json(location);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
