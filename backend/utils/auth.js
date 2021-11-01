// Authentication function

const auth = (req, res, registeredUsers) => {
    if (req.session?.isAuth) {
        console.log("already signed in ");
        res.json(req.session.user);
    } else {
        const wantLoginUser = {
            email: req.body.email,
            password: req.body.password,
        };
        // console.log(wantLoginUser);
        const user = registeredUsers.find(
            (userItem) =>
                userItem.email === wantLoginUser.email &&
                userItem.password === wantLoginUser.password
        );
        // console.log(user);
        if (user) {
            req.session.isAuth = true;
            const {uid, email} = user;
            req.session.user = {uid, email};
            // res.send(`user ${user.email} logged in successfully`);
            res.json(req.session.user);
        } else {
            res.json({ error: "wrong credentials" });
        }
    }
};

module.exports = auth;
