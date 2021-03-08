import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

import $ from 'jquery';

import './Footer.css';

// BACK TO TOP BUTTON 
// const rootElement = document.documentElement;

// const scrollToTop = () => {
//   // Scroll to top logic
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//     // display: "inline-block"
//   })
// }
// $('#scrollToTopBtn').click(scrollToTop);

$(function () {

    //Scroll event
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) $('.go-top').fadeIn('slow');
        if (scrolled < 200) $('.go-top').fadeOut('slow');
    });

    //Click event
    $('.go-top').click(function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });

});

const Footer = () => {

    return (
        <>
            <div className="footer col-xs-12 col-md-12 col-lg-12 col-xl-12">
                <Row>
                    <Col xs={12} sm={{ span: 5, offset: 1 }} md={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }} xl={{ span: 3, offset: 3 }} className="div-footer">
                        <ListGroup variant="flush" className="btn-group-vertical">
                            <ListGroup.Item className="footer-item">
                                <a
                                    className="btn btn-footer"
                                    href="https://www.facebook.com/"
                                    type="button">
                                    <i className="fab fa-facebook-square"></i>
                                    <span className="footer_title">Voir notre page Facebook</span>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item">
                                <a className="btn btn-footer" href="https://www.instagram.com/?hl=fr" type="button">
                                    <i className="fab fa-instagram"></i>
                                    <span className="footer_title">Instagram</span>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item">
                                <a className="btn btn-footer" href="https://twitter.com/?lang=fr" type="button">
                                    <i className="fab fa-twitter-square"></i>
                                    <span className="footer_title">Twitter</span>
                                </a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={12} sm={5} md={5} lg={4} xl={3} className="div-footer">
                        <ListGroup variant="flush" className="btn-group-vertical">
                            <ListGroup.Item className="footer-item">
                                <Link className="btn btn-footer" to="/cgu" type="button">
                                    <i className="fas fa-thumbtack"></i>
                                    <span className="footer_title">Conditions d'utilisation</span>

                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item">
                                <Link className="btn btn-footer" to="/mentions-legales" type="button">
                                    <i className="fas fa-landmark"></i>
                                    <span className="footer_title">Mentions légales</span>

                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item">
                                <Link className="btn btn-footer" to="/cookies" type="button">
                                    <i className="fas fa-eye"></i> <span className="footer_title">Cookies</span>
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <p className="copyright">
                            <i className="fas fa-copyright"></i>
                            2021 - Site créé par Margaux Vitez et Sènadé LOKO
                        </p>
                    </Col>
                </Row>
                <a className="go-top" href="#" data-offset="100" data-duration="300">
                    <i className="fas fa-chevron-up"></i>
                </a>
            </div>
        </>
    );
}

export default Footer;