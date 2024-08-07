//import
const { response } = require("express");
const Todo=require("../models/Todo");

//define route handler
exports.getTodo= async (req,res)=>{
    try{
        //find all todos
        const todos=await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire todo data is fetched"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })

    }
}

exports.getTodoById= async (req,res)=>{
    try {
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});
        if(!todo){
            return res.status(404)
           .json({
            success:false,
            data:"No todo found by given id",
           })
        }
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
    } 
    catch (error) {
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"Not found"
        })
    }
}