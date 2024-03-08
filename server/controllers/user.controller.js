const User = require("../model/user.model");

module.exports.createUser = async (req, res) => {

    try {
        const newUser = await User.create(req.body);
        res.status(201);
        res.json(newUser);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

module.exports.findUserById = async (req, res) => {
    const email = req.params.id;
    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            res.status(401)
            res.json({ message: "Usuario no registrado" });
            return
        }

        res.status(200)
        res.json(user);

    } catch (error) {
        res.status(401)
        res.json({ message: "Usuario no registrado" });
    }
}