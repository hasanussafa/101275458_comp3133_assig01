const mongoose = require('mongoose');

var emailValidation = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        required: [true, "Username must be entered"],
        trim: true
    },

    firstname: {
        type: String,
        required: [true, "First name must be entered"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, "Last name must be entered"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password must be entered"],
        trim: true,
        minlength: 6
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [emailValidation, 'Please give your email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please give your email address']
  },

  type: {
    type: String,
    required: [true, "User Type must be entered"],
    trim: true
}

});

const User = mongoose.model("User", UserSchema);
module.exports = User;