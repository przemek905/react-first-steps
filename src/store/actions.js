import {getCars, saveCar} from "../cars/CarsApi";

export const carsFetched = (cars) => ({
    type: 'FETCH_CARS_SUCCESS',
    cars: cars
});

export const fetchCars = () => (dispatch) => {
    dispatch(carsRequest());
    getCars()
        .then(json => dispatch(carsFetched(json)))
        .catch(error => dispatch(carsRequestError(error)));
};

export const carsRequest = () => ({
    type: 'CARS_REQUEST'
});

export const carsRequestError = (error) => ({
    type: 'CARS_REQUEST_ERROR',
    error: error
});

export const postNewCar = car => (dispatch) => {
    return saveCar(car)
        .then(() => dispatch(addCar(car)))
        .catch(error => dispatch(carsRequestError(error)));
};

export const addCar = (car) => ({
    type: 'ADD_CAR',
    car: car
});

export const searchCars = (text) => ({
    type: 'SEARCH_CARS',
    text
});