const Todo = require("../models/user");

module.exports.tasks = async function (req, res) {
  res.status(200).render("home", {
    title: "Home",
  });
  // try{
  //   let todos = await Todo.find({});
  //   res.render('index',{
  //     tasks:todos
  //   });
  // }catch(err){
  //   console.log("Error in rendering home page", err);
  //   return res.status(500).send("Internal Server Error");
  // }
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