const { default: mongoose } = require('mongoose');
const Moongoose = require('mongoose');

const userSchema = new Moongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    avatar: {
        type: String,
        default: 'https://avatar.iran.liara.run/public/16'
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);

