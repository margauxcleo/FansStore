import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    return (
        <>
            <div className="footer col-xs-12 col-md-12 col-lg-12 col-xl-12">
                <Row>
                    <Col xs={12} sm={{ span:5, offset: 1 }} md={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }} xl={{ span: 3, offset: 3 }} className="div-footer">
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
                                <a className="btn btn-footer" href="" type="button">
                                    <i className="fas fa-thumbtack"></i>
                                    <span className="footer_title">Page de confidentialité</span>
                                    
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item">
                                    <a className="btn btn-footer" href="" type="button">
                                        <i className="fas fa-landmark"></i>
                                        <Link to="/mentions" style={{textDecoration: 'none', color:'white'}}>
                                        <span className="footer_title">Mentions légales</span>
                                        </Link>
                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="footer-item">
                                    <a className="btn btn-footer" href="" type="button">
                                        <i className="fas fa-eye"></i> <span className="footer_title">Cookies</span>
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