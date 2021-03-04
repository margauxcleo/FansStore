import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Inscription.css';

const Inscription = (props) => {
// const { clientId } = useParams();
const { setSignInModalShow } = props;
const { setThemeOnClick } = props;
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [checked, setChecked] = useState(false);
const handleClick = () => setChecked(!checked);
const [userFirstName, setFirstName] = useState("");
const [userLastName, setLastName] = useState("");
const [userDate, setUserDate] = useState("");
const [userEmail, setUserEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordCheck, setPasswordCheck] = useState("");

function validateFormFields() {
  return userEmail.length > 8 && userFirstName.length > 3 && userLastName.length > 3 && password.length > 8 && passwordCheck.length > 8;
  }

function handleSubmit(event) {
  event.preventDefault();
  }

return (
    <>
    <span onClick={handleShow} className="nav-title">Inscription</span>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Informations nécessaires</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Row className="mb-4">
                        <Col className="mr-5">
                            <Form.Control 
                            size="md"
                            value={userFirstName}
                            onChange={e => setFirstName(e.target.value)} 
                            placeholder="First name" 
                            pattern="(?=.*[A-Z])(?=.*[a-z]){3,11})"
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                            size="md" 
                            value={userLastName}
                            onChange={e => setLastName(e.target.value)} 
                            placeholder="Last name" 
                            pattern="(?=.*[A-Z])(?=.*[a-z]){3,11})"/>
                        </Col>
                        </Form.Row>
                        <Form.Row className="mb-4">
                            <Col className="mr-5">
                        <Form.Control 
                        size="md" 
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)} 
                        placeholder="Email Address" 
                        pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})"
                        />
                            </Col>
                            <Col>
                        <Form.Control 
                        size="md" 
                        value={userDate}
                        onChange={e => setUserDate(e.target.value)} 
                        placeholder="Date" 
                        type="date" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="mb-4">
                            <Col className="mr-5">
                        <Form.Control 
                        size="md" 
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Password" 
                        type="password" 
                        pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})"
                        required
                        />
                            </Col>
                            <Col>
                        <Form.Control 
                        size="md" 
                        value={passwordCheck}
                        onChange={e => setPasswordCheck(e.target.value)} 
                        placeholder="Password Check" 
                        type="password"
                        pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})" 
                        required
                        />
                            </Col>
                        </Form.Row>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Je certifie avoir pris connaissances des règles d'utilisations" onChange={e => handleClick(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                        <Button variant="primary"  disabled={!validateFormFields()} type="submit">
                            Créer mon compte
                        </Button>
                        </Form.Group>
                        <Form.Group>
                            <NavLink to="/compte/connexion">
                            <Button variant="primary" type="submit">
                                J'ai déjà un compte, me connecter
                            </Button>
                            </NavLink>
                        </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    </>
)

}

export default Inscription;