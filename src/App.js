import React from 'react';
import './App.css';
import {CarList} from "./cars/CarList";
import {AppHeaderContainer} from "./AppHeader";
import {getFilteredCars} from "./store/selectFilteredcars";
import {addCar, carsFetched, carsRequest, carsRequestError, fetchCars} from "./store/actions";
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
        this.props.fetchCars();
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
const mapDispatchToProps = { carsRequest, carsFetched, carsRequestError, addCar, fetchCars };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
