import React from "react";
import {CarItem} from "./CarItem";
import Loader from 'react-loader-spinner';

export function CarList({cars}) {

    if (cars.loading) {
        return <div className="page-center"><Loader type="TailSpin"/></div>;
    }

    if (cars.error) {
        return <p className="page-center">{cars.error.message}</p>;
    }

    if (cars.cars.length > 0) {
        return (
            <div>
                <main className="container">
                    <ul className="list-group">
                        {cars.cars.map(car =>
                            <CarItem key={car.model} car={car}/>)}
                    </ul>
                </main>
            </div>
        );
    }
    return (
        <p className="page-center">No results for this search!</p>
    );
}
