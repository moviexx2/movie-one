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
};
