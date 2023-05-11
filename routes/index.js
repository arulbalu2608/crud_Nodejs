const userController = require("../controllers/userDetails.controller");
const router = require("express").Router();
const userJoiSchema = require("../validation/userDetails.validation");
const validator = require("express-joi-validation").createValidator({
  passError: true,
});

router.get("/user/getAll", userController.getAllUser);
router.post(
  "/user/create",
  validator.body(userJoiSchema),
  userController.createUser
);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
