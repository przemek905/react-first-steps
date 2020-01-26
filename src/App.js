import React from 'react';
import './App.css';
import {CarList} from "./cars/CarList";
import {AppHeaderContainer} from "./AppHeader";
import {getFilteredCars} from "./store/selectFilteredcars";
import {addCar, carsFetched, carsRequest, carsRequestError} from "./store/actions";
import {connect} from "react-redux";


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            searchValue: "",
            newCar: null
        }
    }

    componentDidMount() {
        this.fetchCars();
    }

    fetchCars() {
        this.props.carsRequest();
        fetch("http://localhost:4000/cars")
            .then(res => res.json())
            .then(json => this.props.carsFetched(json))
            .catch(error => this.props.carsRequestError(error));
    }

    render() {
        return (
            <div>
                <AppHeaderContainer/>
                <CarList cars={this.props}/>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        cars: getFilteredCars(state.cars, state.carsSearch),
        loading: state.cars.loading,
        error: state.cars.error
    }
};
const mapDispatchToProps = { carsRequest, carsFetched, carsRequestError, addCar };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
