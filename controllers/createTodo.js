//import
const Todo=require("../models/Todo");

//define route handler
exports.createTodo= async (req,res)=>{
    try{
        //extract title and description from request body
        const {title,description}=req.body;
        // create a new todo Obj and insert in DB
        const response=await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created successfully'
            }
        )
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
