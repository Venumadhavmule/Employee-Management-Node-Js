const express = require('express');
const cors = require("cors"); 
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');


const app = express();

dotEnv.config();
app.use(cors());

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("MongoDB connected successfully!");
}).catch((error)=>{
  console.log(error);
})

app.use('/employees',employeeRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
  console.log(`Server started and running at ${PORT}`)
})