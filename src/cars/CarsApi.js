const carsUrl = "http://localhost:4000/cars";

export const getCars = () => {
    return fetch(carsUrl)
        .then(res => res.json());
};

export const saveCar = (car) => {
    return fetch(carsUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car)
    })
};