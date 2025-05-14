import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        Unique: true,
    },
    password: {
        type: String,
         required: true,  
    },
    semester: {
      type: String,  // Or an array of semesters if applicable
      required: true,
    },
});
const User = mongoose.model("User", userSchema);
export default User;