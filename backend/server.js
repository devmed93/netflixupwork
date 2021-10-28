const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const session = require("express-session");

const port = 5000;

const app = express();

app.use(cors());
app.use(express.json());

const netflixSession = session({
    secret: "ssshhh it's a secret!",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5000 },
    name: "Netflix-Session",
    path: "/",
});

/*  */

app.use(netflixSession);

/*  */

app.get("/", (req, res) => {
    console.log(req.session);
    res.send("server home page");
});

app.use("/users", userRouter);

app.listen(port, "localhost", () => {
    console.log(`server listening at port : ${port}`);
});
