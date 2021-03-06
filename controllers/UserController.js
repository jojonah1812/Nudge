const db = require("../models");
const jwt = require("../configs/jwt");
const { User } = db;

module.exports = {
    signup: (req, res) => {
        // creates req.body
        const { name, email, password, phone, city, state, zipcode, startDate, salaryRange, typeOfWork, experienceLevel, technicalEdu, school} = req.body
        try {
            // just for required fields, verify entered
            if(!email || !name || !password || !zipcode ) {
                return res.status(400).send("Please fill out all fields");
            }
            // testing for doubles
            User.findOne({$or: [{email}, {name}]}).then(user => {
                if(user === null) {
                    User.create(req.body)
                      return res.status(200).json('User created');
                };

                if(email === user.email) {
                    return res.status(400).send("Email already exists. Please use a different email.");
                };

                if (name === user.name) {
                    return res.status(400).send("Username already exists. Please use a different username.");
                };

            })

        } catch (err) {
            console.log(err)
            return res.status(500).json("Server error, cannot signup");
        }
    },
    login: (req, res) => {
        try {
            const { id } = req.user
            res.status(200).json({ token: jwt.sign({id}), token_type: "Bearer" });
        } catch (err) {
            return res.status(500).send("Server error, cannot login");
        }
    },
    logout: (req, res) => {
        try {
            if(req.user) {
                req.session.destroy(err => {
                    if (err) throw err;
                    res.send({ message: "User logged out" });
                });
                // req.logout();
            } else {
                res.send({ message: "no user to logout" });
            };
        } catch (err) {
            return res.status(500).send(err);
        }
        req.logout();
    },
    getUser: async (req, res) => {
        try {
            const { id } = req.params
            const data = await User.findById(id)
            res.status(200).json(data)
        } catch (err) {
            return res.status(500).send(err);
        }
    }
};