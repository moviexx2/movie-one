const router = require("express").Router();
const { forwardAuthenticate, ensureAuthenticate } = require("../../config");

// testing 1

router.get("/", ensureAuthenticate, require("./controller").get);
router.get("/findByUserID/:UserID", require("./controller").getByUserID);
router.post("/", require("./controller").create);
router.put("/:id", require("./controller").editMovieID);
router.delete("/:id", require("./controller").deleteMovieId);
// testing
// router.put("/edit/:UserID", require("./controller").editUserID);
// router.get("/", forwardAuthenticate, require("./controller").home);
// router.get("/:id", forwardAuthenticate, require("./controller").deleteUserId);

module.exports = router;
