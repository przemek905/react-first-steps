export const carsFetched = (cars) => ({
    type: 'FETCH_CARS_SUCCESS',
    cars: cars
});

export const carsRequest = () => ({
    type: 'CARS_REQUEST'
});

export const carsRequestError = (error) => ({
    type: 'CARS_REQUEST_ERROR',
    error: error
});

export const addCar = (car) => ({
    type: 'ADD_CAR',
    car: car
});

export const searchCars = (text) => ({
    type: 'SEARCH_CARS',
    text
});