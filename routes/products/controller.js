const { hashed } = require("../../helpers");
const { Product } = require("../../models");
const Movie = require("../../models/Movie");

module.exports = {
    create: async (req, res) => {
        try {
            const result = await Product.create({ ...req.body });

            res.send({ message: "Add Product successfull", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const result = await Product.find().populate("UserID");

            res.send({ message: "Add Product successfull", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getByUserID: async (req, res) => {
        try {
            const { UserID } = req.params;

            const result = await Product.find({ UserID }).populate("UserID");

            res.send({ message: "Add Product successfull", data: result });
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
        } catch (error) {
            console.log(error);
        }
    },
};
