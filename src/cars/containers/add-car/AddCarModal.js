import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loader from "react-loader-spinner";
import {postNewCar} from "../../../store/actions";
import {useDispatch} from "react-redux";

export function AddCarModal({onClose, show}) {
    const [state, setState] = useState({
        imgSrc: "",
        model: "",
        desc: "",
        isAvailable: true,
        isProcessing: false
    });
    const dispatch = useDispatch();

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setState({
            ...state,
            [name]: value
        });
    }

    function addCar() {
        let newCar = {
            imgSrc: state.imgSrc,
            model: state.model,
            desc: state.desc,
        };
        setState({
            ...state,
            isProcessing: true
        });

        dispatch(postNewCar(newCar))
            .then(() => setState({imgSrc: "", model: "", desc: "", isAvailable: true, isProcessing: false}))
            .then(() => onClose());
    }

    if (!show) {
        return null;
    }

    return (
        <Modal show={show}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Dodawanie nowego auta
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="page-center"><Loader type="TailSpin" visible={state.isProcessing}/></div>
                <Form>
                    <Form.Group controlId="formMark">
                        <Form.Label>Marka i model</Form.Label>
                        <Form.Control type="text" placeholder="np. Fiat Panda" name="model" value={state.model}
                                      onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formEngine">
                        <Form.Label>Opis</Form.Label>
                        <Form.Control type="text" name="desc" value={state.desc}
                                      onChange={handleInputChange}/>
                        <Form.Text className="text-muted">
                            Opis auta i silnika, np. 2.0 benzyna
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formImg">
                        <Form.Label>Zdjęcie - URL</Form.Label>
                        <Form.Control type="text" name="imgSrc" value={state.imgSrc}
                                      onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formAvailable">
                        <Form.Check type="checkbox" label="Dostepny" name="isAvailable"
                                    checked={state.isAvailable}
                                    onChange={handleInputChange}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={addCar}>Submit</Button>
                <Button onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );


}