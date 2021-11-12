import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import payment from '../../../img/payment.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faFacebook,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {


//  font awesome icons 
    const google = <FontAwesomeIcon className="fs-5 text-white" icon={faGoogle} />;
    const facebook = <FontAwesomeIcon className="fs-5 text-white" icon={faFacebook} />;
    const instagram = <FontAwesomeIcon className="fs-5 text-white" icon={faInstagram} />;
    const linkedin = <FontAwesomeIcon className="fs-5 text-white" icon={faLinkedin} />;
   
    
    let currentYear = new Date().getFullYear();

    return (
        <div className="bg-dark mt-5 py-4">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h3 className="text-white "> About us</h3>
                        <p className="text-white">The new hero pieces bring instant fashion credibility. Bright florals clash with camouflage prints.</p>
                        <h4 className="text-white "> Follow us</h4>
                        <div className=" w-100 text-center">
                            <div className=" d-flex ms-4">
                          <p  className="ms-5"><a href="https://google.com" target="_blank" rel="noreferrer"> {google}</a></p>
                          <p className="ms-2"><a href="https://facebook.com" target="_blank" rel="noreferrer"> {facebook}</a></p>
                          <p className="ms-2"><a href="https://instagram.com" target="_blank" rel="noreferrer"> {instagram}</a></p>
                          <p className="ms-2"><a href="https://linkedin.com" target="_blank" rel="noreferrer"> {linkedin}</a></p>
                          </div>
                        </div>
                    </Col>
                    <Col>
                        <h3 className="text-white "> Information</h3>
                        <p className="text-white">About Us</p>
                        <p className="text-white">Services</p>
                        <p className="text-white">Delivery Information</p>
                        <p className="text-white">Terms & Conditions</p>
                        <p className="text-white">Return Policy</p>
                    </Col>
                    <Col>
                        <h3 className="text-white "> My Account</h3>
                        <p className="text-white">My Account</p>
                        <p className="text-white">Cart</p>
                        <p className="text-white">Checkout</p>
                        <p className="text-white">Checkout</p>
                        <p className="text-white">Contact</p>

                    </Col>
                    <Col>
                        <h3 className="text-white "> Get In Touch</h3>
                        <p className="text-white">14 Tottenham Road, London, England.</p>
                        <p className="text-white"> (102) 6666 8888</p>
                        <p className="text-white">info@demo.com</p>
                        <p className="text-white">(102) 8888 9999</p>
                        <p className="text-white"><img className="ms-5" src={payment} alt="payment" /></p>
                    </Col>
                    <hr className="w-100 text-white border border-1 mt-4" />
                    <p className="text-white">Copyright &copy; 2021-{currentYear} Garcia. All Right Reserved.Made with ❤️ by Hasibul Polok 🔥</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;