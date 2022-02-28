const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
    scalar Date

    type users {
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type newListings {
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!   
        username: String!
    }

    type newBookings {
        listing_id: String!
        booking_id: String!
        booking_date: Date!
        booking_start: Date!
        booking_end: Date!
        username: String!
    }


    type Query {
        searchName(listing_title: String!) : [newListings]
        searchCity(city: String!) : [newListings]
        getUsers(username: String!, password: String!) : [users]
        getNewBooking(username: String, password: String!) : [newBookings]
        getNewListings(secret: String!) : [newListings]  
    }
   


    type Mutation {
        addUsers(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!
        ) : users

        updateusers(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!
            ): users

        deleteusers(id: String!): users

        addListing(
            listing_id: String!
            listing_title: String!
            description: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String! 
            login: String!      
        ) : newListings

        addBooking(
            listing_id: String!
            booking_id: String!
            booking_start: Date!
            booking_end: Date!
            username: String!
            login: String!
        ) : newBookings

    }

`
