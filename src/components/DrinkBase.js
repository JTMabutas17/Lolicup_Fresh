import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class DrinkBase extends Component {
  render() {
    return (
      <section id="menu">
        <h1 className="menus-header">Step 1: Drink Base</h1>
        <div className="menu-container">
          <div className="container">
            <div className="card">
              <img src="images/lollicup/Drinks/black-tea.png" />
              <p>Black Tea <br /> Base price: $4 </p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/flavored-milk.png" />
              <p>Flavored Milk <br /> Base price: $5 </p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/green-tea.png" />
              <p>Green Tea <br /> Base price: $3 </p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/iced-coffee.png" />
              <p>Iced Coffee <br /> Base price: $6 </p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/juice.png" />
              <p>Juice <br /> Base price: $3 </p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/milk-tea.png" />
              <p>Milk Tea <br /> Base price: $4 </p>
            </div>
          </div>
        </div>

        <div className="btn-container">
           <form>    
                <div class = "textBox">
                    <label for="sweetness" id="sweetnessLabel">Sweetness Level:</label>
                    <input type="text" id="sweetness" name="sweetness" value="50%" disabled="true" /> 
                    <label for="icelevel" id="icelevel">Ice Level: </label>
                    <input type="text" id="icelevel" name="icelevel" value="25%" disabled="true" /> 
                    <label for="hotorcold" id="hotorcold">Hot or Cold: </label>
                    <input type="text" id="hotorcold" name="hotorcold" value="Hot" disabled="true"/> 
                </div> 
            </form>
          </div>

        <div className="btn-container">
          <Link to="/DrinkFlavor">
            <p className="btn" onclick="myFunction()">Next Step</p>
          </Link>
          <Link to="/checkout">
            <p className="btn" onclick="myFunction()">Checkout</p>
          </Link>
        </div>
      </section>
    );
  }
}