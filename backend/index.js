import dotenv from 'dotenv'   
import express from 'express';

import cors from 'cors';
import { connectDB } from './lib/db.js';
import bookRoute from './route/book.route.js'; 
import userRoute from './route/user.route.js';
import path from 'path';

const app = express()

app.use(cors());  

app.use(express.json()); //jei data body diye send korteci oita json a parse korbe

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 4000;

const __dirname = path.resolve();


  // defining routes
  app.use("/book", bookRoute);
  app.use("/user", userRoute);


  app.use(express.static(path.join(__dirname, '/frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })

  app.listen(PORT, () => {
    console.log(` Server listening on port ${PORT}`);
  connectDB();
  });

