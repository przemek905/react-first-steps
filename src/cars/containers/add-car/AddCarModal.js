import React from 'react';
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loader from "react-loader-spinner";
import {getFilteredCars} from "../../../store/selectFilteredcars";
import {addCar, carsFetched, carsRequest, carsRequestError} from "../../../store/actions";
import {connect} from "react-redux";

export class AddCarModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imgSrc: "",
            model: "",
            desc: "",
            isAvailable: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <Modal show={this.props.show}
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
                    <div className="page-center"><Loader type="TailSpin" visible={this.props.loading}/></div>
                    <Form>
                        <Form.Group controlId="formMark">
                            <Form.Label>Marka i model</Form.Label>
                            <Form.Control type="text" placeholder="np. Fiat Panda" name="model" value={this.state.model}
                                          onChange={this.handleInputChange}/>
                        </Form.Group>

                        <Form.Group controlId="formEngine">
                            <Form.Label>Opis</Form.Label>
                            <Form.Control type="text" name="desc" value={this.state.desc}
                                          onChange={this.handleInputChange}/>
                            <Form.Text className="text-muted">
                                Opis auta i silnika, np. 2.0 benzyna
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formImg">
                            <Form.Label>Zdjęcie - URL</Form.Label>
                            <Form.Control type="text" name="imgSrc" value={this.state.imgSrc}
                                          onChange={this.handleInputChange}/>
                        </Form.Group>

                        <Form.Group controlId="formAvailable">
                            <Form.Check type="checkbox" label="Dostepny" name="isAvailable"
                                        checked={this.state.isAvailable}
                                        onChange={this.handleInputChange}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={this.addCar}>Submit</Button>
                    <Button onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    addCar = () => {
        let newCar = {
            imgSrc: this.state.imgSrc,
            model: this.state.model,
            desc: this.state.desc,
        };

        this.setState({isLoading: true});

        this.props.carsRequest();
        fetch(' http://localhost:4000/cars', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCar)
        })
            .then(() => this.setState({imgSrc: "", model: "", desc: "", isAvailable: true}))
            .then(() => this.props.addCar(newCar))
            .then(() => this.props.onClose())
            .catch(error => this.props.carsRequestError(error));
    };

}

const mapStateToProps = (state) => {
    return {
        cars: getFilteredCars(state.cars, state.carsSearch),
        loading: state.cars.loading,
        error: state.cars.error
    }
};
const mapDispatchToProps = { carsRequest, carsFetched, carsRequestError, addCar };

export const AddCarContainer = connect(mapStateToProps, mapDispatchToProps)(AddCarModal);