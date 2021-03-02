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
const [userEmail, setUserEmail] = useState("");
const [password, setPassword] = useState("");

function validateFormFields() {
  return userEmail.length > 8 && password.length > 8;
  }

function handleSubmit(event) {
  event.preventDefault();
  }
    

return (
    <>
    <span onClick={handleShow} className="nav-title">Connexion</span>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Please Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control 
                  type="email" 
                  placeholder="Email address" 
                  value={userEmail}
                  onChange={e => setUserEmail(e.target.value)}
                  pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})"
                  required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})"
                  required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check 
                  type="checkbox" 
                  label="Remember me" 
                  onChange={e => handleClick(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Button variant="primary" type="submit" size="lg" block>
                    Sign In
                  </Button>
                </Form.Group>
                <Form.Group>
                  <Button variant="secondary" disabled={!validateFormFields()} type="submit" size="lg" block>
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