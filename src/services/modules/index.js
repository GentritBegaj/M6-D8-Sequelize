const express = require("express");
const Module = require("../../db").Module;
const Class = require("../../db").Class;
const Student = require("../../db").Student;
const { Op, Sequelize } = require("sequelize");

const router = express.Router();

router.route("/").get(async (req, res, next) => {
  try {
    const data = await Module.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: "%" + req.query.name + "%" } },
          {
            classes: Sequelize.where(Sequelize.col(`'classes'.topic`), {
              [Op.iLike]: "%" + req.query.className + "%",
            }),
          },
        ],
      },
      include: {
        model: Class,
        include: { model: Student, through: { attributes: [] } },
      },
    });
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Module.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Module.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.send(data[1][0]);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
  .delete(async (req, res, next) => {
    try {
      const data = await Module.destroy({ where: { id: req.params.id } });
      if (data > 0) {
        res.send("OK");
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

module.exports = router;
