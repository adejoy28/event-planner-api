const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        trim: true
    },
    organizerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Organizer is required']
    },
    maxAttendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    timestamps: true
});


module.exports = mongoose.model('Event', eventSchema);  