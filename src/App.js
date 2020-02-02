import React, {useEffect} from 'react';
import './App.css';
import {CarList} from "./cars/CarList";
import {AppHeader} from "./AppHeader";
import {getFilteredCars} from "./store/selectFilteredcars";
import {fetchCars} from "./store/actions";
import {useDispatch, useSelector} from "react-redux";


function App() {

    const cars = useSelector(state => {
        return {
            cars: getFilteredCars(state.cars, state.carsSearch),
            loading: state.cars.loading,
            error: state.cars.error
        }
    });

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCars());
    }, []);

    return (
        <div>
            <AppHeader/>
            <CarList cars={cars}/>
        </div>
    );

}

export default App;
