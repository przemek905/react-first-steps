import React from "react";
import {CarItem} from "./CarItem";
import Loader from 'react-loader-spinner';

export class CarList extends React.Component {

    render() {
        console.log("LIST", this.props);
        if (this.props.cars.loading) {
            return <div className="page-center"><Loader type="TailSpin"/></div>;
        }

        if (this.props.cars.error) {
            return <p className="page-center">{this.props.cars.error.message}</p>;
        }

        if (this.props.cars.cars.length > 0) {
            return (
                <div>
                    <main className="container">
                        <ul className="list-group">
                            {this.props.cars.cars.map(car =>
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

}