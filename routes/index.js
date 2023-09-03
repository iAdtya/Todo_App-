const express = require('express') ;
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.tasks);
router.post('/create', homeController.create);
router.get('/delete-todo', homeController.delete);

console.log('Router Loaded');

module.exports = router;