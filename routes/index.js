const express = require('express') ;
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.tasks);
router.post('/create', homeController.create);

console.log('Router Loaded');

module.exports = router;