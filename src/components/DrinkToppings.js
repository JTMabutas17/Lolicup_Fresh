import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class DrinkToppings extends Component {
  render() {
    return (
      <section id="menu">
        <h1 className="menus-header">Step 3: Drink Toppings (+ $0.75)</h1>
        <div className="menu-container">
          <div className="container">
            <div className="card">
              <img src="images/lollicup/Add-Ons/boba-honey.png" />
              <p>Honey Boba</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/boba-mini.png" />
              <p>Mini Boba</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/jelly-aloevera.png" />
              <p>Aloevera Jelly</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/jelly-assortedyogo.png" />
              <p>Assorted Yogo Jelly</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/jelly-coconut-mango.png" />
              <p>Coconut Mango Jelly</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Add-Ons/jelly-grass.png" />
              <p>Grass Jelly</p>
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