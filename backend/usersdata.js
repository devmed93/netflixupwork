const getUsers = () => {
    let users = [
        { uid : 1, email: "mohammed@gmail.com", password: "mohammed123456" },
        { uid : 2, email: "kamal@gmail.com", password: "kamal123456" },
        { uid : 3, email: "james@gmail.com", password: "james123456" },
        { uid : 4, email: "laila@gmail.com", password: "laila123456" },
        { uid : 5, email: "noha@gmail.com", password: "noha123456" },
    ];

    return users;
};
module.exports = getUsers;
