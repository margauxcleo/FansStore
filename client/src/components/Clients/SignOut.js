import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import './Clients.css';

const SignOut = (props) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const { setAuth } = props;

const onLogout = async (event) => {
    event.preventDefault();
    localStorage.removeItem("jwt");
    setAuth(false);
}

return (
    <>
    <span onClick={handleShow} className="nav-title">Déconnexion</span>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Etes-vous sur de vouloir vous déconnectez ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                    <Button variant="danger" size="lg" block onClick={(e) => onLogout(e)}>Oui</Button>
                    </Form.Group>
                    <Form.Group>
                    <Button variant="success btn btn-secondary" size="lg" block onClick={handleClose}>Non, rester connecté</Button>   
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    </>
)

}

export default SignOut;