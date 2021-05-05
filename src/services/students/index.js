const express = require("express");
const Student = require("../../db").Student;
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
      const data = await Student.bulkCreate([
        { name: "Gentrit", lastname: "Begaj" },
        { name: "Luca", lastname: "Perullo" },
      ]);
      res.send(data);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

router.route("/:studentId/classes/:classId").post(async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    const result = await Student.addClass(req.params.classId);
    res.send(result);
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
