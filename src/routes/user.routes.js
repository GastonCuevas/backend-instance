const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware } = require("../middlewares");
const parseIntMiddleware = require("../middlewares/parse-int.middleware");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:userId", UserController.get);
  router.get("", [AuthMiddleware, ParseIntMiddleware], UserController.getAll);
  router.patch("/:userId", UserController.update);
  router.delete("/:userId", UserController.delete);

  return router;
};