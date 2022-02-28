import React, { Component } from 'react'
import axios from 'axios';


const User = props => (

    <tbody>
        <ul>
            <li>Username {props.user.username}</li>
            <li>Firstname {props.user.firstname}</li>
            <li>Last Name {props.user.lastname}</li>
            <li>Password {props.user.password}</li>
            <li>Email {props.user.email}</li>
            <li>Type {props.user.type}</li>

          </ul>
    </tbody>
   
)


export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = { user: [] };
    }

   

    componentDidMount() {
        axios.get("http://localhost:3001/users")
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
  

    //   var dataUserName =   this.state.user.map(data=>{
    //         return data.user.username
    //     })
    //     if (document.getElementById("userNameInput").value = dataUserName) {
    //       window.location = "/home.html";
    //     } else {
    //         window.location = "/error.html";
    //     }




        return (
            <div>

             {this.userList()}
               

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" id='userNameInput' placeholder="Enter Username" name="uname" required></input>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>

      {/* <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input> */}
 
      <button type="submit" id="login">Login</button>
      
    </div>
            
            </div>
        )
    }
}