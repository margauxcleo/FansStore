import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import './Footer.css';

const Footer = () => {

    return (
        <>
            <div className="footer">
                <Row>
                    <Col xs={12} sm={{ offset: 12 }} sm={5} md={{ offset: 1 }} md={5} lg={{ offset: 2 }} lg={4} xl={{ offset: 3 }} xl={3} className="div-footer">
                        <ListGroup variant="flush" className="btn-group-vertical">
                            <ListGroup.Item className="footer-item">
                                <a
                                    className="btn btn-footer"
                                    href="https://www.facebook.com/"
                                    type="button">
                                    <i className="fab fa-facebook-square"></i>
                                    Voir notre page Facebook
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item">
                                <a className="btn btn-footer" href="https://www.instagram.com/?hl=fr" type="button">
                                    <i className="fab fa-instagram"></i>
                                    Instagram
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item">
                                <a className="btn btn-footer" href="https://twitter.com/?lang=fr" type="button">
                                    <i className="fab fa-twitter-square"></i>
                                    Twitter
                                </a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={12} sm={5} md={5} lg={4} xl={3}>
                        <ListGroup variant="flush" className="btn-group-vertical">
                            <ListGroup.Item className="footer-item">
                                <a className="btn btn-footer" href="" type="button">
                                    <i className="fas fa-thumbtack"></i>
                                    Page de confidentialité
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item">
                                    <a className="btn btn-footer" href="" type="button">
                                        <i className="fas fa-landmark"></i>
                        Mentions légales
                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="footer-item">
                                    <a className="btn btn-footer" href="" type="button">
                                        <i className="fas fa-eye"></i>
                        Cookies
                    </a>
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
            </div>
        </>
    );
}

export default Footer;