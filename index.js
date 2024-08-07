const express=require('express');
const app= express();


//load config from env file
require("dotenv").config();
const PORT=process.env.PORT_DEFAULT=3000||4000;

//middlewar to parse request body 
app.use(express.json());

//import routes for TODO 
const todoRoutes=require('./routes/todos');
//mount the todo API routes
app.use('/api/v1',todoRoutes);


//start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//connect to database
const dbConnect=require('./config/database');
dbConnect();

//default Route
app.get('/',(req,res)=>{
    res.send(`<h1>This is home page wigga</h1>`)
})