import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class DrinkFlavor extends Component {
  render() {
    return (
      <section id="menu">
        <h1 className="menus-header">Step 2: Drink Flavor</h1>
        <div className="menu-container">
          <div className="container">
            <div className="card">
              <img src="images/lollicup/Flavors/avocado.png" />
              <p>Avocado</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/banana.png" />
              <p>Banana</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/brown-sugar.png" />
              <p>Brown Sugar</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/hibiscus.png" />
              <p>Hibiscus</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/lychee.png" />
              <p>Lychee</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/mango.png" />
              <p>Mango</p>
            </div>
          </div>
        </div>
        <div className="menu-container">
          <div className="container">
            <div className="card">
              <img src="images/lollicup/Flavors/matcha.png" />
              <p>Matcha</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/peach.png" />
              <p>Peach</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/strawberry.png" />
              <p>Strawberry</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/taro.png" />
              <p>Taro</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/wintermelon.png" />
              <p>Wintermelon</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Flavors/yogurt.png" />
              <p>Yogurt</p>
            </div>
          </div>
        </div>


        <div className="btn-container">
          <Link to="/DrinkBase">
            <p className="btn" onclick="myFunction()">Previous Step</p>
          </Link>
          <Link to="/DrinkToppings">
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