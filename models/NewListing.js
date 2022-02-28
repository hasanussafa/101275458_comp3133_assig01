const mongoose = require('mongoose');

var emailValidation = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const NewListingSchema = new mongoose.Schema({

    listing_id: {
        type: String,
        required: [true, "Listing id must be entered"],
        trim: true,
        unique: true
    },

    listing_title: {
        type: String,
        required: [true, "Listing title must be entered"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Description must be entered"],
        trim: true,
    },
    street: {
        type: String,
        required: [true, "Street must be entered"],
        trim: true,
    },

    city: {
        type: String,
        required: [true, "City must be entered"],
        trim: true,
    },

    postal_code: {
        type: String,
        required: [true, "Postal code must be entered"],
        trim: true,
    },

    price: {
        type: String,
        required: [true, "Price must be entered"],
        trim: true,
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        //unique: true,
        validate: [emailValidation, 'Please give your email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please give your email address']
  },

  username: {
    type: String,
    required: [true, "Username must be entered"],
    trim: true,
}

});

const NewListing = mongoose.model("NewListing", NewListingSchema);
module.exports = NewListing;