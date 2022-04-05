module.exports = (db) => {
  const getStats = () => {
    const query = {
      text: "SELECT * FROM stats",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addStats = (heatmap, attempts) => {
    const query = {
      text: `INSERT INTO stats (heatmap, attempts) VALUES ($1, $2) RETURNING *`,
      values: [heatmap, attempts],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  return {
    getStats,
    addStats,
  };
};
