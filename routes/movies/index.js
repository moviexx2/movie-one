const router = require("express").Router();
const { forwardAuthenticate, ensureAuthenticate } = require("../../config");

router.post("/", require("./controller").create);
router.get("/", require("./controller").get);
router.get("/findByUserID/:UserID", require("./controller").getByUserID);
// testing
router.put("/edit/:UserID", require("./controller").editUserID);
router.get("/", forwardAuthenticate, require("./controller").home);
router.get("/:id", forwardAuthenticate, require("./controller").deleteUserId);

module.exports = router;
