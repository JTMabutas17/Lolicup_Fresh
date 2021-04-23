import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SignIn extends Component {
  checkSignIn() {
    var success = true;
  
    var username = document.getElementById('username');
    var password = document.getElementById('password');
  
    var usernameLabel = document.getElementById('usernameLabel');
    var passwordLabel = document.getElementById('passwordLabel');
  
    var allInputs = [username,password];
    var allLabels = [usernameLabel, passwordLabel];
    for(var i = 0; i < allInputs.length; i++) {
        allLabels[i].style.color = "black";
        if(allInputs[i].value == "" || allInputs[i].value.length == 0) {
          allLabels[i].style.color = "red";
          success = false;
        }
    }
    if(success) {
      alert("Signed in!");
    }
    else {
      alert("Enter required fields.");
      window.location.reload();
      for(var i = 0; i < allInputs.length; i++) {
        allInputs[i].value = "";
      }
    }
  }

  render() {
    return (
      <section id="signin">
        <div className = "signIn-container">
        <div className = "registrationForm-container">
        <div className = "registrationForm">
            <form>
                <h1>Sign In</h1>
                <div class = "textBox">
                    <label for="username" id="usernameLabel">Username:</label><br/>
                    <input type="text" id="username" name="username" /> <br/>
                    <label for="password" id="passwordLabel">Password:</label> <br/>
                    <input type="password" id="password" name="password" /> <br/>               
                  <button onClick={this.checkSignIn}><Link to="/Home">Sign In</Link></button>   
                </div>
            </form>
        </div>
        </div>
        </div>
      </section>
    );
  }
}