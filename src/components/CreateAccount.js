import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CreateAccount extends Component {
  checkForm() {
    var success = true;

    var username = document.getElementById('username');
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var dateOfBirth = document.getElementById('dateOfBirth');

    var usernameLabel = document.getElementById('usernameLabel');
    var firstNameLabel = document.getElementById('firstNameLabel');
    var lastNameLabel = document.getElementById('lastNameLabel');
    var passwordLabel = document.getElementById('passwordLabel');
    var confirmPasswordLabel = document.getElementById('confirmPasswordLabel');
    var dateOfBirthLabel = document.getElementById('dateOfBirthLabel');


    var allInputs = [username, firstName, lastName, password, confirmPassword, dateOfBirth];
    var allLabels = [usernameLabel, firstNameLabel, lastNameLabel, passwordLabel, confirmPasswordLabel, dateOfBirthLabel];
    for(var i = 0; i < allInputs.length; i++) {
        allLabels[i].style.color = "black";
        if(allInputs[i].value == "" || allInputs[i].value.length == 0) {
            allLabels[i].style.color = "red";
            success = false;
        }
    }
    if(success) {
        alert("Succeeded in creating account.");
        return false;
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
      <section id="create">
        <div className = "create-container">
        <div className = "createForm-container">
        <div className = "createForm">
            <form>
                <h1>Create an Account</h1>
    
                <div class = "textBox">
                    <label for="username" id="usernameLabel">Username:</label>
                    <input type="text" id="username" name="username" /> 
                    <label for="firstName" id="firstNameLabel">First Name:</label>
                    <input type="text" id="firstName" name="firstName" /> 
                    <label for="lastName" id="lastNameLabel">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" /> 
                    <label for="password" id="passwordLabel">Password:</label> 
                    <input type="text" id="password" name="password" /> 
                    <label for="confirmPassword" id="confirmPasswordLabel">Confirm Password:</label> 
                    <input type="text" id="confirmPassword" name="confirmPassword" /> 
                    <label for="dateOfBirth" id="dateOfBirthLabel">Date of Birth:</label> 
                    <input type="date" id="dateOfBirth" name="dateOfBirth" /> 
                </div>
                <br/>
                <button onClick={this.checkForm}><Link to="/Home">Create</Link></button>  
            </form>
        </div>
        </div>
        </div>
      </section>
    );
  }
}