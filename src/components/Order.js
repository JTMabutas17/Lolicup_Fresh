import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Order extends Component {
  render() {
    return (
      <section id="order">
        <div className="order-container">
      <div className="row">
      <div className="col-75">
      <div className="container">
      <form action="/action_page.php">

      <div className="row">
      <div className="col-50">
      <h3>Order Form</h3>
      <label for="base">Drink Base</label>
      <input type="text" id="base" name="drinkBase" placeholder="Select a Drink"  />
      <label for="flavor">Drink Flavor</label>
      <input type="text" id="flavor" name="drinkFlavor" placeholder="Select a Flavor" />
      <label for="toppings">Toppings</label>
      <input type="text" id="toppings" name="drinkToppings" placeholder="Select a Topping"  />

      <div className="row">
      <div className="col-50">
      <label for="sweet">Sweetness Level</label>
      <input type="text" id="sweet" name="drinkSweet" placeholder="Select Sweetness Level"  />
      </div>
      <div className="col-50">
      <label for="ice">Ice Level</label>
      <input type="text" id="ice" name="drinkIce" placeholder="Select Ice Level"  />
      </div>
      </div>
      </div>

      </div>
      <Link to="/DrinkBase">
      <p className="btn">Add Drink</p>
      </Link>
      <Link to="/Checkout">
      <p className="btn">Continue to Checkout</p>
      </Link>
      </form>
      </div>
      </div>
      <div className="col-25">
              <div className="container">
                <h4>Cart
      <span className="price" style={{ color: "black" }}>
                    <i className="fa fa-shopping-cart"></i>
                    <b>4</b>
                  </span>
                </h4>
                <p style={{ paddingTop: "10px" }}><a href="#" style={{ color: "blue" }}>Mango Green Tea</a> <span className="price">$5</span></p>
                <p><a href="#" style={{ color: "blue" }}>Thai Tea</a> <span className="price">$5</span></p>
                <p><a href="#" style={{ color: "blue" }}>Black Tea</a> <span className="price">$3</span></p>
                <p><a href="#" style={{ color: "blue" }}>Oolong Milk Tea</a> <span className="price">$4</span></p>
                <hr />
                <p>Total <span class="price" style={{ color: "black" }}><b>$17</b></span></p>
              </div>
            </div>
      </div>
      </div>
      </section>
    );
  }
}