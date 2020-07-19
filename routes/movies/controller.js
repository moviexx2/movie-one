const { hashed } = require("../../helpers");
const { Movie } = require("../../models");

module.exports = {
    create: async (req, res) => {
        try {
            const result = await Movie.create({ ...req.body });

            res.send({ message: "add movie succes", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    home: async (req, res) => {
        try {
            const results = await Movie.find();

            console.log({ message: "Add movie succes", data: results });
            res.render("home", { result: results });
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const result = await Movie.find().populate("UserID");
            res.send({ message: "add movie succesfull", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getByUserID: async (req, res) => {
        try {
            const { UserID } = req.params;

            const result = await Movie.find({ UserID }).populate("UserID");
            res.send({ message: "Add movie succesful", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    deleteUserId: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await Movie.findByIdAndDelete(id);
            res.send({ message: "Delete succes", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    editUserID: async (req, res) => {
        try {
            const { UserID } = req.params;

            const result = await Movie.find({ UserID }).populate("UserID");
            console.log(result);
            res.send({ message: "Succes", data: result });
        } catch (error) {
            console.log(error);
        }
    },
};
