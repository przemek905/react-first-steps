import {combineReducers} from "redux";

export const cars = (state = {cars: [], loading: false, error: null}, action) => {
    switch (action.type) {
        case 'CARS_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'CARS_REQUEST_ERROR':
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case 'FETCH_CARS_SUCCESS':
            return {
                ...state,
                cars: action.cars,
                loading: false
            };
        case 'ADD_CAR':
            return {
                ...state,
                cars: [...state.cars, action.car],
                loading: false
            };
        default:
            return state
    }
};

export const carsSearch = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_CARS':
            return action.text;
        default:
            return state
    }
};

export default combineReducers({
    cars, carsSearch
})