const express = require("express");
const router = express.Router();
const cors = require("cors");
const getUsers = require("../usersdata.js");
const auth = require("../utils/auth.js");

const app = express();
app.use(cors);
app.use(express.json());

const users = getUsers();

router.get("/", (req, res, next) => {
    res.send("users page");
});

router.post("/login", function (req, res) {
    auth(req, res, users);
});

module.exports = router;
