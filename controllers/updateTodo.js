//import
const Todo=require("../models/Todo");

//define route handler
exports.updateTodo= async (req,res)=>{
    try{
        //update todo by id
        const id=req.params.id;
        const {title,description}=req.body;
        const todo=await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )
        //response
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Updated todo ${id} successfully`
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