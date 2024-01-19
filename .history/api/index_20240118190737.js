import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://stavan:stavan@mern-estate.3szsk.mongodb.net/mern-estate?retryWrites=true&w=majority")

const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!!!')
}
);