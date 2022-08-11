const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    summary: String,
    user_id: mongoose.Types.ObjectId
})

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;