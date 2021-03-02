import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import { useState } from "react";

const SignIn = (props) => {
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
    <span onClick={handleShow} className="nav-title">Connexion</span>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Please Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" checked/>
                </Form.Group>
                <Form.Group>
                  <Button variant="primary" type="submit" size="lg" block>
                    Sign In
                  </Button>
                </Form.Group>
                <Form.Group>
                  <Button variant="secondary" type="submit" size="lg" block>
                   Créer un compte
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

export default SignIn;