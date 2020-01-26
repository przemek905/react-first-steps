export const getFilteredCars = (cars, text) => {
    return cars.cars.filter(car =>
        car.model.toLowerCase().includes(text.toLowerCase())
    );
};