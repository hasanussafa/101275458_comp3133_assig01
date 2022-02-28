import React, { Component } from 'react'
import axios from 'axios';

<tbody>
<h1> All Listings</h1>
<table id="customers" class="tableInfo">
    <th>
        <td>Listing ID </td>
        <td>Listing Title</td>
        <td>Description</td>
        <td>Street </td>
        <td>City</td>
        <td>Postal Code</td>
        <td>Price</td>
        <td>Email</td>
        <td>Username</td>
    </th>
</table>
</tbody>
const User = props => (

    <tbody>
        <table id="customers" class="tableInfo">
            
            <tr>
                <td> {props.user.listing_id}</td>
                <td> {props.user.listing_title}</td>
                <td> {props.user.description}</td>
                <td> {props.user.street}</td>
                <td> {props.user.city}</td>
                <td> {props.user.postal_code}</td>
                <td> {props.user.price}</td>
                <td> {props.user.email}</td>
                <td> {props.user.username}</td>

            </tr>
          </table>
    </tbody>
   
)

export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = { user: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/newListing")
            .then(response => {
                console.log(response.data)
                const user = response.data
                this.setState({ user })
            })
            .catch((error) => {
                console.log(error);
            })


    }

    userList() {
        return this.state.user.map(data => {
            return <User className="card-deck card" user={data} key={data._id}  />;
        })
    }

    render() { 
        return (
            <div>
             {this.userList()}
    
            </div>
        )
    }
}