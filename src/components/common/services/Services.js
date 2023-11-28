import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";
import { FaRobot } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
function Services() {
  return (
    <div>
      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <FaRobot />
                </div>
                <div className="feature-content">
                  <h5>AI Bot</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam exercitationem possimus totam earum labore, atque
                    quo voluptas. Excepturi, facilis nam.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <FaShippingFast />
                </div>
                <div className="feature-content">
                  <h5>Worldwide Shipping</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Enim doloremque laboriosam suscipit neque quae quo voluptate
                    aperiam debitis vel cupiditate.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <GiClothes />
                </div>
                <div className="feature-content">
                  <h5>Best Quality</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur fugit iste quia explicabo cupiditate laborum,
                    molestiae tenetur placeat obcaecati. Soluta?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <GiPriceTag />
                </div>
                <div className="feature-content">
                  <h5>Best Offers</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe a quas magni maxime pariatur animi aperiam, sequi
                    alias possimus praesentium.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <BiSupport />
                </div>
                <div className="feature-content">
                  <h5>24/7 Customer Support</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe a quas magni maxime pariatur animi aperiam, sequi
                    alias possimus praesentium.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <RiSecurePaymentLine />
                </div>
                <div className="feature-content">
                  <h5>Secure Payments</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe a quas magni maxime pariatur animi aperiam, sequi
                    alias possimus praesentium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
