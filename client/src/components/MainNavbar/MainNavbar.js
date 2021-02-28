import { NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState} from "react";
import './MainNavbar.css';

const MainNavbar = (props) => {

    const { setThemeOnClick } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)

    return(
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light navbar-main bg-main">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">FansStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="is-active" to="/" exact>
                                <i className="fas fa-home"></i>
                                    <span className="
                                    nav-title">Accueil</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="is-active" to="/produits" exact>
                                    <span className="nav-title">Produits</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" activeclassname="is-active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Univers
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink 
                                        className="dropdown-item" 
                                        to="/univers/harry-potter" 
                                        exact 
                                        onClick={(event) => setThemeOnClick(event, "produits/univers/harry-potter", "Harry Potter", "hp")}
                                        >
                                            <span className="nav-title">Harry Potter</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                        className="dropdown-item" 
                                        to="/univers/star-wars" 
                                        exact
                                        // onClick={(event) => setThemeOnClick(event, "produits/univers/star-wars", "Star Wars")}
                                        >
                                            <span className="nav-title">Star Wars</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                        className="dropdown-item" 
                                        to="/univers/seigneur-des-anneaux" 
                                        exact
                                        // onClick={(event) => setThemeOnClick(event, "produits/univers/seigneur-des-anneaux", "Le Seigneur des Anneaux")}
                                        >
                                            <span className="nav-title">Le Seigneur des Anneaux</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                        className="dropdown-item" 
                                        to="/univers/marvel" 
                                        exact
                                        // onClick={(event) => setThemeOnClick(event, "produits/univers/marvel", "Marvel")}
                                        >
                                            <span className="nav-title">Marvel</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                        <i className="fa fa-user mt-2"></i>
                            <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" activeclassname="is-active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Compte
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <NavLink 
                                            className="dropdown-item" 
                                            to="/compte/inscription"
                                            exact
                                            >
                                                <span onClick={handleShow}  className="nav-title">Inscription</span>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                <Modal.Title>Informations nécessaires</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                <Form>
                                                <Form.Row className="mb-4">
                                                    <Col className="mr-5">
                                                    <Form.Control size="md" placeholder="First name"/>
                                                    </Col>
                                                    <Col>
                                                    <Form.Control size="md" placeholder="Last name" />
                                                    </Col>
                                                </Form.Row>
                                                <Form.Row className="mb-4">
                                                    <Col className="mr-5">
                                                    <Form.Control size="md" placeholder="Email Address" />
                                                    </Col>
                                                    <Col>
                                                    <Form.Control size="md" placeholder="Date" type="date" />
                                                    </Col>
                                                </Form.Row>
                                                <Form.Row className="mb-4">
                                                    <Col className="mr-5">
                                                    <Form.Control size="md" placeholder="Password" type="password"/>
                                                    </Col>
                                                    <Col>
                                                    <Form.Control size="md" placeholder="Password Check" type="password" />
                                                    </Col>
                                                </Form.Row>
                                                <Form.Group id="formGridCheckbox">
                                                    <Form.Check type="checkbox" label="Je certifie avoir pris connaissances des règles d'utilisations" checked/>
                                                </Form.Group>
                                                <Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Créer mon compte
                                                </Button>
                                                </Form.Group>
                                                <Form.Group>
                                                <Button variant="primary" type="submit">
                                                    J'ai déjà un compte, me connecter
                                                </Button>
                                                </Form.Group>
                                                </Form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                </Modal.Footer>
                                            </Modal>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                            className="dropdown-item" 
                                            to="/compte/connexion" 
                                            exact
                                            >
                                                <span className="nav-title">Connexion</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="is-active" to="/panier" exact>
                                    <i className="fas fa-shopping-basket"></i>
                                    <span className="
                                    nav-title">Panier</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default MainNavbar;