const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    years: {
        type: Number,
        // required: true,
    },
    UserID: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
