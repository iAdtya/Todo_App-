const Todo = require("../models/user");

//todo fetch data from database
module.exports.tasks = async function (req, res) {
  try {
    let todos = await Todo.find()
      .select("-updatedAt -createdAt -__v")
      .sort({ _id: -1 });
    res.status(200).render("home", {
      title: "Home",
      todos: todos,
    });
  } catch (err) {
    console.log("Error in rendering home page", err);
    return res.status(500).send("Internal Server Error");
  }
};

//todo create new task
module.exports.create = async function (req, res) {
  try {
    const newtodo = await Todo.create({
      description: req.body.description,
      category: req.body.category,
      due_date: req.body.date,
    });
    console.log("New todo", newtodo);
    return res.redirect("back");
  } catch (err) {
    console.log("Error in creating a todo", err);
    return res.status(500).send("Internal Server Error"), res.redirect("back");
  }
};

//todo delete task
module.exports.delete = async function (req, res) {
  try {
    // Get the task IDs from query parameters
    const taskIds = Object.keys(req.body);// Assuming the task IDs are passed as an array of IDs in the 'ids' parameter
    console.log(taskIds);

    // Loop through each task ID and delete it
    for (const taskId of taskIds) {
        // Using async/await to handle asynchronous operations
        await Todo.findByIdAndDelete(taskId);
    }

    return res.redirect('back');
} catch (error) {
    console.error(error);
    res.redirect('/');
}
};
