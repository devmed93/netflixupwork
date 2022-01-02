const express = require("express");
const cors = require("cors");
const path = require("path");

const userRouter = require("./routes/users");
const moviesRouter = require("./routes/movies");
const moviesListRouter = require("./routes/moviesList");

const session = require("express-session");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

const netflixSession = session({
    secret: "ssshhh it's a secret!",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 10, httpOnly: true },
    name: "netflixsession",
    path: "/",
});

/*  */

app.use(netflixSession);

/* Serve static assets if on production */
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.get('*', (req, res) => {
//   res.sendFile('../frontend/build/index.html')
// })
app.get("/", async (req, res) => {
    console.log(`the port is => ${port}`);
    console.log("the process.env port is ==>", process.env.PORT);
});

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/users", userRouter);
app.use("/movies/list", moviesListRouter);
app.use("/movies", moviesRouter);

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, "localhost", () => {
    console.log(`server listening at port : ${port}`);
});
