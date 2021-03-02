import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import './Inscription.css';

const Inscription = (props) => {
// const { clientId } = useParams();
const { setSignInModalShow } = props;
const { setThemeOnClick } = props;
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [checked, setChecked] = useState(false)
const handleClick = () => setChecked(!checked)

return (
    <>
    <span onClick={handleShow} className="nav-title">Inscription</span>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Informations nécessaires</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row className="mb-4">
                        <Col className="mr-5">
                            <Form.Control size="md" placeholder="First name" />
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
                        <Form.Control size="md" placeholder="Password" type="password" />
                            </Col>
                            <Col>
                        <Form.Control size="md" placeholder="Password Check" type="password" required/>
                            </Col>
                        </Form.Row>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Je certifie avoir pris connaissances des règles d'utilisations" checked />
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
    </>
)

}

export default Inscription;