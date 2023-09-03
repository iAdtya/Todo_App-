const Todo = require("../models/user");

module.exports.tasks = async function (req, res) {
  try {
  let todos = await Todo.find().select('-updatedAt -createdAt -__v').sort({_id:-1});
  res.status(200).render("home", {
    title: "Home",
    todos:todos
  });
  }catch(err){
    console.log("Error in rendering home page", err);
    return res.status(500).send("Internal Server Error");
  }
};    

module.exports.create = async function (req, res) {
  try {
    const newtodo = await Todo.create({
      description: req.body.description,
      category: req.body.category,
      due_date: req.body.date
    });
    console.log("New todo", newtodo);
    return res.redirect("back");
  } catch (err) {
    console.log("Error in creating a todo", err);
    return res.status(500).send("Internal Server Error"), res.redirect("back");
    
  }
};

module.exports.delete = async function (req, res) {

  // console.log(req.query);
  const taskId = req.query.id;
  const result = await Todo.findByIdAndDelete(taskId);
    try{
      if(result){
        console.log("Todo deleted successfully");
        return res.redirect("back");
      }else{
        return res.status(404).send("Not Found");
      }
    }catch(err){
      console.log("Error in deleting a todo", err);
      return res.status(500).send("Internal Server Error");
    }
} 
