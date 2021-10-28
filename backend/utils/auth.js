// Authentication function

const auth = (req, res, registeredUsers) => {
    if (req.session.isAuth) {
        console.log("you are already signed in");
    }
    const wantLoginUser = { name: req.body.name, password: req.body.password };
    console.log(wantLoginUser);
    const user = registeredUsers.find(
        (userItem) =>
            userItem.name === wantLoginUser.name &&
            userItem.password === wantLoginUser.password
    );
    if (user) {
        req.session.isAuth = true;
        res.send(`user ${user.name} logged in successfully`);
    } else {
        res.send("wrong credentials");
    }
};

module.exports = auth;
