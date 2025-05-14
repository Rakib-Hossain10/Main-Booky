
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {
  try {
    const { fullname, email, password,semester } = req.body; //ai shob data body theke nitechi
    const user = await User.findOne({ email });  //database a email er through te find kor ei user ase ki nai
    if (user) {
      return res.status(400).json({ message: "user is already exist " });
    }
    const hashedPassword = await bcrypt.hash(password, 10); //password ke hash korbo 10 ta salt diye
    const createUser = new User({
      fullname : fullname,
      email : email,
      password : hashedPassword,
      semester : semester,
    });
    await createUser.save();

    // Fetch books for the user's semester
    // const books = await getSemisterWiseBook({ semester });

    res.status(201).json({ message: "new user is created", user: {
      id: createUser._id,
      fullname: createUser.fullname,
      email: createUser.email,
      semester : createUser.semester,
    },
    // books,   // Return the books for the user’s semester
   });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

export const login = async (req, res) => {

  try {
    const {email, password, semester} = req.body;
    const user = await User.findOne({email});  //amar database a find korar por oi user er shob info ai user variable a store hobe
    const isMatch = await bcrypt.compare(password, user.password); //user jei password diche oitar shathe amar database er password ke compare korbo
    if(!user || !isMatch) {
      return res.status(400).json({message: "invalid UserName or password"}); //jodi user na thake ba password match na kore tahole error dibe
    } else{
      return res.status(200).json({message: "login successful",
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
          semester : user.semester,
        }
      }); //jodi user thake ar password match kore tahole login successful hobe
      
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "internal server error" });
  }
}