import React from "react";
import {CarItem} from "./CarItem";

export class CarList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allCars: [],
            filteredCars: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/cars")
            .then(res => res.json())
            .then(json => this.setState({allCars: json, filteredCars: json}))
            .then(() => this.getFilteredCars);
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
        this.setState({filteredCars: filteredCars});
    };

    filterCars(searchValue) {
        return this.state.allCars.filter(car =>
            car.model.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

}