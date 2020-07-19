// const { hashed } = require("../../helpers");
const { Movie } = require("../../models");

module.exports = {
    create: async (req, res) => {
        try {
            const result = await Movie.create({ ...req.body });

            res.redirect("/movies/home");
        } catch (error) {
            console.log(error);
        }
    },
    showForm: (req, res) => {
        res.render("formMovie.ejs");
    },

    get: async (req, res) => {
        try {
            const result = await Movie.find().populate("UserID");
            res.render("home.ejs", { result });
        } catch (error) {
            console.log(error);
        }
    },
    getByUserID: async (req, res) => {
        try {
            const { UserID } = req.params;

            const result = await Movie.find({ UserID }).populate("UserID");
            res.send({ message: "Add movie by id succesful", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    deleteMovieId: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await Movie.deleteOne({ _id: id });
            res.send({
                message: `Delete data succcess`,
                data: result,
            });
        } catch (error) {
            res.send(error);
        }
    },
    editMovieID: async (req, res) => {
        const { id } = req.params;
        console.log(id);
        try {
            const result = await Movie.findByIdAndUpdate(id, {
                $set: { ...req.body },
            });

            res.send({ message: "Update succes", data: result });
        } catch (error) {
            console.log(error);
        }
    },
};
