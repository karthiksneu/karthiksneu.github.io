import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="sec contact">
            <h4>Contact Us</h4>
            <ul className="info">
              <li>
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span><a href="https://goo.gl/maps/KKfbwyZz5by9DrgN7" target="_blank">Boston, MA</a></span>
              </li>
              <li>
                <span>
                  <i class="fas fa-phone-alt"></i>
                </span>
                <span>+1 (857) 222-6884</span>
              </li>
              <li>
                <span>
                  <i class="fas fa-envelope"></i>
                </span>
                <span>contact@tiptonhotel.com</span>
              </li>
              {/* <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span>119/2, moratuwa</span>
                </li> */}
            </ul>
          </div>

          <div className="sec aboutus">
            <h4>About Us</h4>
            <p>
              Tipton Hotel welcomes you in a real cosmopolitan, pulsing milieu,
              at the same time offering peace and intimate retirement, just in
              the heart of the city centre. Timeless elegance tailored for the
              demands of our time; exceptional combination of magnificent
              architecture and divine cuisine, in perfect harmony. A
              Michelin-starred restaurant and a beautifully restored town palace
              joined forces for you!
            </p>

            <ul className="sci">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/accounts/login/">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://music.youtube.com/">
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>

          {}
        </div>
      </footer>
    </>
  );
};

export default Footer;
