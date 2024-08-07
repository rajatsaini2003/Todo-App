//import
const Todo=require("../models/Todo");

//define route handler
exports.deleteTodo= async (req,res)=>{
    try{
        //update todo by id
        const id=req.params.id;
        const todo=await Todo.findByIdAndDelete({_id:id})
        //response
        if(!todo){
            return res.status(404).json({
                success:false,
                data:null,
                message:`Todo not found with id ${id}`
            })
        }
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Deleted todo ${id} successfully`
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