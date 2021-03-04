import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import './Clients.css';

const SignOut = (props) => {
// const { clientId } = useParams();
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


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
                    <Button variant="danger" size="lg" block>Oui</Button>
                    </Form.Group>
                    <Form.Group>
                    <Button variant="success btn btn-secondary" size="lg" block>Non, rester connecté</Button>   
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