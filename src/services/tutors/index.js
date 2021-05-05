const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
  .post(async (req, res, next) => {
    try {
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

module.exports = router;
