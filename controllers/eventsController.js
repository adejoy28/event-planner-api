const router = require('express').Router();

const getAll = (req, res) => {
    res.status(200).json({ message: 'Get all events' });
};

const createContact = (req, res) => {
    res.status(201).json({ message: 'Create a new event' });
}

const get = (req, res) => {
    res.status(200).json({ message: `Get event with ID ${req.params.id}` });
}


module.exports = {
    getAll,
    createContact,
    get,
}