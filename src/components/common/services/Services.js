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
            <h2 className="text-center">Services</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="feature-box-1">
                <div className="icon">
                  <FaRobot />
                </div>
                <div className="feature-content">
                  <h5>AI Bot</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="feature-box-1">
                <div className="icon">
                  <FaShippingFast />
                </div>
                <div className="feature-content">
                  <h5>Worldwide Shipping</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="feature-box-1">
                <div className="icon">
                  <GiPriceTag />
                </div>
                <div className="feature-content">
                  <h5>Best Offers</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="feature-box-1">
                <div className="icon">
                  <RiSecurePaymentLine />
                </div>
                <div className="feature-content">
                  <h5>Secure Payments</h5>
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
