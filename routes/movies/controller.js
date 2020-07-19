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
    get: async (req, res) => {
        try {
            const result = await Movie.find().populate("UserID");
            Response.send({ message: "add movie succesfull", data: result });
        } catch (error) {
            console.log(error);
        }
    },
};
