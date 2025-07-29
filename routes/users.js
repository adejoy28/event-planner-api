const router = require('express').Router();

const userController = require('../controllers/userController');


// 


// Define routes for users
router.route('/')
    .get(userController.getAllUsers) // Get all users 
    .post(userController.register); // Create a new user

router.route('/:id')
    .get(userController.getUser) // Get a specific user by ID    
    .put(userController.updateUser) // Update a specific user by ID
    .delete(userController.deleteUser); // Delete a specific user by ID


module.exports = router;