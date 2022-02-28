const mongoose = require('mongoose');

const BookingListing = new mongoose.Schema({

    listing_id: {
        type: String,
        required: [true, "Listing id must be entered"],
        trim: true,
        unique: true
    },

    booking_id: {
        type: String,
        required: [true, "Booking ID must be entered"],
        trim: true,
    },
    booking_date: {
        type: String,
        required: [true, "Booking date must be entered"],
        trim: true,
    },
    booking_start: {
        type: String,
        required: [true, "Start date be entered"],
        trim: true,
    },

    booking_end: {
        type: String,
        required: [true, "End date be entered"],
        trim: true,
    },

  username: {
    type: String,
    required: [true, "Username must be entered"],
    trim: true,
}

});

const NewBooking = mongoose.model("NewBooking", BookingListing);
module.exports = NewBooking;