import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class DrinkToppings extends Component {
  render() {
    return (
      <section id="menu">
        <h1 className="menus-header">Step 3: Drink Toppings</h1>
        <div className="menu-container">
          <div className="container">
            <div className="card">
              <img src="images/lollicup/Add-Ons/boba-honey.png" />
              <p>Boba Honey</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/boba-mini.png" />
              <p>Boba Mini</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/jelly-aloevera.png" />
              <p>Jelly Aloevera</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/jelly-assortedyogo.png" />
              <p>Jelly Assorted Yogo</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/jelly-coconut-mango.png" />
              <p>Jelly Coconut Mango</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/jelly-grass.png" />
              <p>Jelly Grass</p>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <Link to="/DrinkFlavor">
            <p className="btn" onclick="myFunction()">Previous Step</p>
          </Link>
          <Link to="/checkout">
            <p className="btn" onclick="myFunction()">Checkout</p>
          </Link>
        </div>
        
      </section>
    );
  }
}