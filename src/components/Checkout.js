import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Checkout extends Component {
  received(){alert("Order Received!");}
  render() {
    return (
      <section id="checkout">
        <div className="checkout-container">
          <div className="row">
            <div className="col-75">
              <div className="container">
                <form action="/action_page.php">

                  <div className="row">
                    <div className="col-50">
                      <h3>Billing Address</h3>
                      <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                      <input type="text" id="fname" name="firstname" value="John M. Doe" disabled />
                      <label for="email"><i className="fa fa-envelope"></i> Email</label>
                      <input type="text" id="email" name="email" value="john@example.com" disabled />
                      <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                      <input type="text" id="adr" name="address" value="1234 San Gabriel Blvd" disabled />
                      <label for="city"><i className="fa fa-institution"></i> City</label>
                      <input type="text" id="city" name="city" value="San Gabriel" disabled />

                      <div className="row">
                        <div className="col-50">
                          <label for="state">State</label>
                          <input type="text" id="state" name="state" value="CA" disabled />
                        </div>
                        <div className="col-50">
                          <label for="zip">Zip</label>
                          <input type="text" id="zip" name="zip" value="10001" disabled />
                        </div>
                      </div>
                    </div>

                    <div className="col-50">
                      <h3>Payment</h3>
                      <label for="fname">Accepted Cards</label>
                      <div className="icon-container">
                        <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                        <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                        <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                        <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
                      </div>
                      <label for="cname">Name on Card</label>
                      <input type="text" id="cname" name="cardname" value="John More Doe" disabled />
                      <label for="ccnum">Credit card number</label>
                      <input type="text" id="ccnum" name="cardnumber" value="1111-2222-3333-4444" disabled />
                      <label for="expmonth">Exp Month</label>
                      <input type="text" id="expmonth" name="expmonth" value="September" disabled />

                      <div className="row">
                        <div className="col-50">
                          <label for="expyear">Exp Year</label>
                          <input type="text" id="expyear" name="expyear" value="2018" disabled />
                        </div>
                        <div className="col-50">
                          <label for="cvv">CVV</label>
                          <input type="text" id="cvv" maxlength="3" min="0" name="cvv" value="352" disabled />
                        </div>
                      </div>
                    </div>

                  </div>
                  <label>
                    <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
      </label>
                  <Link to="/Home">
                    <p className="btn" onClick={this.received}>Finalize Order</p>
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
