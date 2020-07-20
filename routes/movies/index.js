const router = require("express").Router();
const { forwardAuthenticate, ensureAuthenticate } = require("../../config");

router.get("/", forwardAuthenticate, require("./controller").get);
router.get("/findByUserID/:UserID", require("./controller").getByUserID);
router.post("/upload", require("./controller").create);
router.put("/:id", require("./controller").editMovieID);
router.delete("/:id", require("./controller").deleteMovieId);
router.get("/upload", ensureAuthenticate, require("./controller").showForm);
router.get("/home", require("./controller").get);
module.exports = router;
