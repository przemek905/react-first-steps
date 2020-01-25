import React from "react";
import {CarItem} from "./CarItem";
import Loader from 'react-loader-spinner';

export class CarList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allCars: [],
            filteredCars: [],
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.fetchCars();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchValue !== this.props.searchValue) {
            this.getFilteredCars();
        }
        if (prevProps.newCar !== this.props.newCar) {
            console.log("Fetching cars");
            this.fetchCars();
        }
    }

    fetchCars() {
        this.setState({isLoading: true});

        fetch("http://localhost:4000/cars")
            .then(res => res.json())
            .then(json => this.setState({allCars: json, filteredCars: json, isLoading: false}))
            .then(() => this.getFilteredCars)
            .catch(error => this.setState({error: error, isLoading: false}));
    }

    render() {
        const { filteredCars, isLoading, error } = this.state;
        if (isLoading) {
            return <div className="page-center"><Loader type="TailSpin"/></div>;
        }

        if (error) {
            return <p className="page-center">{error.message}</p>;
        }

        if (filteredCars.length > 0) {
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
            <p className="page-center">No results for this search!</p>
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