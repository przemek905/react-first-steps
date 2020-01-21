import React from "react";
import {CarItem} from "./CarItem";

export const allCars = [
    {
        imgSrc: "https://www.abbottsaab.com/wp-content/uploads/2016/02/saab-93-overview.png",
        model: "Saab 9-3 SS",
        desc: "1.5 benzyna"
    },
    {
        imgSrc: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/Mazda-323.png",
        model: "Mazda 323 BJ",
        desc: "1.6 Benzyna + Gaz"
    },
    {
        imgSrc: "http://namasce.pl/wp-content/uploads/2014/11/renault_megane.gif",
        model: "Renault Megane",
        desc: "1.6 Benzyna + Gaz"
    }];

export class CarList extends React.Component {

    constructor() {
        super();

        this.state = {
            filteredCars: allCars
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchValue !== this.props.searchValue) {
            this.getFilteredCars();
        }
    }

    render() {
        if (this.state.filteredCars.length > 0) {
            return (
                <div>
                    <main className="container">
                        <ul className="list-group">
                            {this.state.filteredCars.map(car =>
                                <CarItem key={car.model} car={car}/>)}
                        </ul>
                    </main>
                </div>
            );
        }
        return (
            <p>No results for this search!</p>
        );
    }

    getFilteredCars = () => {
        const filteredCars = this.filterCars(this.props.searchValue);
        this.setState({filteredCars});
    };

    filterCars(searchValue) {
        return allCars.filter(car =>
            car.model.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

}