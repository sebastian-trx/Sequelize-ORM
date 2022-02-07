const { Router } = require("express");
const router = Router();
const {
  postPost,
  // putUser,
  // deleteUser,
  // userInfo,
 } = require("../controllers/postController.js");

router.post("/", postPost);
// router.put("/", putUser);
// router.delete("/", deleteUser);
// router.get("/", userInfo);



module.exports = router;
