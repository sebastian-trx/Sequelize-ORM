const { Router } = require("express");
const router = Router();
const {
  postPost,
  putPost,
  deletePost,
  postInfo,
 } = require("../controllers/postController.js");

router.post("/", postPost);
router.put("/", putPost);
router.delete("/", deletePost);
router.get("/", postInfo);



module.exports = router;
