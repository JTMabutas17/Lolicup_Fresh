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
      <input type="text" id="base" name="drinkBase" value="Select a Drink" disabled />
      <label for="flavor">Drink Flavor</label>
      <input type="text" id="flavor" name="drinkFlavor" value="Select a Flavor" disabled/>
      <label for="toppings">Toppings</label>
      <input type="text" id="toppings" name="drinkToppings" value="Select a Topping" disabled />

      <div className="row">
      <div className="col-50">
      <label for="sweet">Sweetness Level</label>
      <input type="text" id="sweet" name="drinkSweet" value="Select Sweetness Level" disabled />
      </div>
      <div className="col-50">
      <label for="ice">Ice Level</label>
      <input type="text" id="ice" name="drinkIce" value="Select Ice Level" disabled />
      </div>
      </div>
      </div>

      </div>
      <br/>
      <Link to="/DrinkBase">
      <p className="btn">Add Drink</p>
      </Link>
      <Link to="/Checkout">
      <p className="btn">Continue to Checkout</p>
      </Link>
      </form>
      </div>
      </div>
      </div>
      </div>
      </section>
    );
  }
}