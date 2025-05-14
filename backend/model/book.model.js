import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    category: String,
    image: String,
    title: String,
    semester: String,
    wikipediaLink: { type: String, required: false },
});
const Book = mongoose.model("Book", bookSchema);

export default Book;