import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="about-container">
          <img className="profile-picture" src="images/lollicup/Etc/lollicup-logo.png" />
          <div className="about-text-area">
            <h1>About Us</h1>
            <p>Lollicup About Page</p>
          </div>
        </div>
      </section>
    );
  }
}