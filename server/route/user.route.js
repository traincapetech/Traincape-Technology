const signup = require("../controller/user.controller.js").signup;
const login = require("../controller/user.controller.js").login;
const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);

// export default router;
module.exports = router;
