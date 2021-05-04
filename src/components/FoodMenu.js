import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class FoodMenu extends Component {
  render() {
    return (
      <section id="menu">
        <h1 className="menus-header">Food Menu</h1>
        <div className="menu-container">
          <div className="container">
            <div className="card">
              <img src="images/lollicup/Food/chicken-wings.jpg" />
              <p>Chicken Wings <br /> $5 </p>
            </div>
            <div className="card ">
              <img src="images/lollicup/Food/fried-calamari.jpg" />
              <p>Fried Calamari <br /> $7 </p>
            </div>
            <div className="card">
              <img src="images/lollicup/Food/fried-tofu.jpg" width="500px" height="500px" />
              <p>Fried Tofu <br /> $4 </p>
            </div>
            <div className="card">
              <img src="images/lollicup/Food/popcorn-chicken.png" width="500px" height="500px"/>
              <p>Popcorn Chicken <br /> $6 </p>
            </div>
            <div className="card">
              <img src="images/lollicup/Food/sandwich.jpg" width="500px" height="500px"/>
              <p>Sandwiches <br /> $8 </p>
            </div>
            <div className="card">
              <img src="images/lollicup/Food/soy-pudding.jpg" width="500px" height="500px" />
              <p>Soy Pudding <br /> $3 </p>
            </div>
          </div>
        </div>


        <div className="btn-container ">
          <Link to="/checkout">
            <p className="btn" onclick="myFunction()">Checkout</p>
          </Link>
        </div>

      </section>
    );
  }
}