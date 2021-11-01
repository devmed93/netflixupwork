// Authentication function

const auth = (req, res, registeredUsers) => {
    if (req.session.isAuth) {
        console.log("you are already signed in");
    }
    const wantLoginUser = {
        email: req.body.email,
        password: req.body.password,
    };
    console.log(wantLoginUser);
    const user = registeredUsers.find(
        (userItem) =>
            userItem.email === wantLoginUser.email &&
            userItem.password === wantLoginUser.password
    );
    console.log(user);
    if (user) {
        req.session.isAuth = true;
        // res.send(`user ${user.email} logged in successfully`);
        res.json(user);
    } else {
        res.json({ error: "wrong credentials" });
    }
};

module.exports = auth;
