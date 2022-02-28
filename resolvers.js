const users = require('./models/User')
const newListing = require('./models/NewListing')
const newBooking = require('./models/BookingListing')

exports.resolvers = {
    Query: {

        getUsers: async (parent, args) => {
            let user = await users.findOne({$and: [{username: args.username}, {password: args.password}]})
            if (user==user && user.type == 'customer)') {
                return { 
                    secret: process.env.SECRET_USER
                 }
            } 
            else if (user==user && user.type == 'admin)') {
                return { 
                    secret: process.env.SECRET_ADMIN
                 }
            }
            else{
                return ("Please check your username and password")

            }
          
        },

        getNewListings: async (parent, args) => {
            if (args.secret == process.env.SECRET_ADMIN) {
                return newListing.find({})
            } else {
                return ("Only user can login")
            }
        },

        getNewBooking: async (parent, args) => {
            let arrayBookList = []
            if (args.secret == process.env.SECRET_USER) {
                arrayBookList = await newBooking.find({username: args.username})
            }           
            if (args.secret == process.env.SECRET_ADMIN) {
                arrayBookList = await newBooking.find({})
            }      
            return arrayBookList
        },
       
        searchName: async (parent, args) => {
            return newListing.find(args)
        },
        searchCity: async (parent, args) => {
            return newListing.find(args)
        }

    },

    Mutation: {
        addUsers: async (parent, args) => {
           // console.log(args)
            let newUser = new users({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                type: args.type
               
            })

            return newUser.save()
        },
        addListing: async (parent, args) => {
            if (args.secret == process.env.SECRET_ADMIN) {
                let new_Listing = new newListing({
                    listing_id: args.listing_id,
                    listing_title: args.listing_title,
                    description: args.description,
                    street: args.street,
                    city: args.city,
                    postal_code: args.postal_code,
                    price: args.price,
                    email: args.email,   
                    username: args.username
                })

                return new_Listing.save()
            }
        },
        addBooking: async (parent, args) => {
            if (args.secret == process.env.SECRET_USER) {
                let new_Booking = new newBooking({
                    listing_id: args.listing_id,
                    booking_id: args.booking_id,
                    booking_date: args.booking_date,
                    booking_start: args.booking_start,
                    booking_end: args.booking_end,
                    username: args.username

                })

                return new_Booking.save()
            }
        }
    }
}