
const route = require('express').Router(),
    bcrypt = require('bcrypt');

const User = require('../Model/User');

// Get all users
const getAllUsers = async (req, res) => {
    // #swagger.tags = ['Users']
    try {
        const allUsers = await User.find({});
        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json({ message: 'All users fetched successfully', users: allUsers });

    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
}

// Get a specific user by ID
const getUser = async (req, res) => {
    // #swagger.tags = ['Users']
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User fetched successfully', user });

    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
}

// Register a new user
const register = async (req, res) => {
    // #swagger.tags = ['Users']

    const { name, email, password, avatar } = req.body;

    console.log("Registering user with details:", { name, email, password, avatar });

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    console.log("Checking if user already exists with email:", email);
    const checkUserAlreadyExists = await User.findOne({ email: email.toLowerCase() });
    if (checkUserAlreadyExists) {
        return res.status(400).json({ message: 'User with this email already exists' });
    }
    console.log("User available proceeding to create new user");

    // hash the password
    console.log("Hashing password for user:", email);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);


    const newUser = await User.create({
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        avatar: avatar
    });

    if (!newUser) {
        return res.status(500).json({ message: 'Error creating user' });
    }
    res.status(201).json({ message: 'User created successfully', user: newUser });

}

const login = async (req, res) => {

};

// Update user details
const updateUser = async (req, res) => {
    // #swagger.tags = ['Users']
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'Sorry cannot perform update, User not found' });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
        console.log("Error updating user:", req.params.id);
        return res.status(500).json({ message: 'Error updating user' });
    }


    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
};

// Delete a user

const deleteUser = async (req, res) => {
    // #swagger.tags = ['Users']
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'Sorry cannot perform delete, User not found' });
    }

    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
        return res.status(500).json({ message: 'Error deleting user' });
    }

    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
};

module.exports = {
    getAllUsers,
    getUser,
    register,
    // login,
    updateUser,
    deleteUser
}