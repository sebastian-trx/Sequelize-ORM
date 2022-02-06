const { Router } = require("express");
const router = Router();
const {
  postAddress,
  putAddress,
  deleteAddress,
  addressInfo,
 } = require("../controllers/addressController.js");

router.post("/", postAddress);
router.put("/", putAddress);
router.delete("/", deleteAddress);
router.get("/", addressInfo);



module.exports = router;
