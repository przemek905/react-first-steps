import React, {useEffect} from 'react';
import './App.css';
import {CarList} from "./cars/CarList";
import {AppHeader} from "./AppHeader";
import {getFilteredCars} from "./store/selectFilteredcars";
import {fetchCars} from "./store/actions";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {About} from "./About";


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
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div>
                <AppHeader/>
                <Switch>
                    <Redirect exact from="/" to="cars" />
                    <Route path="/cars">
                        <CarList cars={cars}/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );

}

export default App;
