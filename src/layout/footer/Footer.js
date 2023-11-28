import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
  } from "mdb-react-ui-kit";
  import { BiLogoFacebook } from "react-icons/bi";
  import { BiLogoTwitter } from "react-icons/bi";
  import { BiLogoYoutube } from "react-icons/bi";
  import { BiLogoInstagram } from "react-icons/bi";
  import { BiHome } from "react-icons/bi";
  import { BiEnvelope } from "react-icons/bi";
  import { BiPhone } from "react-icons/bi";
  import './footer-style.css'
  
  export default function Footer() {
    return (
      <MDBFooter className="text-center text-lg-start footer bg-info">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
  
          <div>
            <a href="" style={{padding:'5px',borderRadius:'20px'}} className="me-4 text-reset">
              <BiLogoFacebook className="icon" />
            </a>
            <a href="" className="me-4 text-reset">
              <BiLogoTwitter className="icon"/>
            </a>
            <a href="" className="me-4 text-reset">
              <BiLogoInstagram  className="icon"/>
            </a>
            <a href="" className="me-4 text-reset">
              <BiLogoYoutube className="icon"/>
            </a>
          </div>
        </section>
  
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Quirk Cart
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam nemo hic perspiciatis at suscipit, autem saepe
                  possimus, culpa provident corporis et rem nostrum atque enim
                  aliquid consequatur nesciunt! Quasi, sit!
                </p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
                <p>
                  <a href="" className="text-reset">
                    Men
                  </a>
                </p>
                <p>
                  <a href="" className="text-reset">
                    Women
                  </a>
                </p>
                <p>
                  <a href="" className="text-reset">
                    Kids
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Return Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <BiHome className="me-2" />KFUEIT RYK,Pakistan
                </p>
                <p>
                  <BiEnvelope className="me-2" />faltooswag@gmail.com
                </p>
                <p>
                  <BiPhone className="me-2" />+923032664863
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>© 2023 Copyright:
          <a className="text-reset fw-bold" href="">
             www.quirkcart.com
          </a>
        </div>
      </MDBFooter>
    );
  }
  