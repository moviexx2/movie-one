const router = require("express").Router();
const { forwardAuthenticate, ensureAuthenticate } = require("../../config");

router.post("/", require("./controller").create);
