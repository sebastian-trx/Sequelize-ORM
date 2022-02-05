const { Router } = require("express");
const router = Router();
const {
  postUser,
  putUser,
  deleteUser,
  userInfo,
 } = require("../controllers/userController.js");

router.post("/", postUser);
router.put("/", putUser);
router.delete("/", deleteUser);
router.get("/", userInfo);



module.exports = router;
