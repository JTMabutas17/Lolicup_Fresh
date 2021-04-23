import React, { Component, Slide , useEffect} from 'react';

export default class Header extends Component {
  Slideshow() {
    const ads = [`url(../images/lollicup/Ads/delivery.jpg)`, `url(../images/lollicup/Ads/catering.jpg)`, `url(../images/lollicup/Ads/flavors.png)`];
    const delay = 2500;

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === ads.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
      <section id="header">
      <div className="slideshow">
        
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {ads.map((_, index) => (
            <div
              className="slide"
              key={index}
              style={{'backgroundImage': ads[index]}}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {ads.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>

        <br></br>

        <div className="about-container">
          <img className="profile-picture" alt="lollicup logo" src="./images/lollicup/Etc/lollicup-logo.png"/>
          <div className="about-text-area">
            <h1>Our Mission</h1>
            <p>To deliver an exceptional dining experience by creating an eatery that is fun, fresh, and first-rate. <br></br>
               The Lollicup® concept is not just about great tasting food, but the whole dining experience – without long wait times and overpriced items. Lollicup® stores strive to bring a brand new experience to customers that will have them eager to come back for more.</p>
            </div>
        </div>

      </div>
      
      </section>
    );
  }
  render(){
    return(<this.Slideshow />);
  }
}