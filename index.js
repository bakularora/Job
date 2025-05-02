import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import jobRoutes from './Routes/jobRoutes.js';
import cors from 'cors';

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());


//routes


//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Job Aggregator app</h1>");
});

app.use('/api/jobs', jobRoutes);

//PORT
const PORT = process.env.PORT ;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});