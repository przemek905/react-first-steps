import React from 'react';
import './App.css';
import {CarList} from "./cars/CarList";
import {AppHeader} from "./AppHeader";


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            searchValue: "",
            newCar: null
        }
    }

    render() {
        return (
            <div>
                <AppHeader searchValue={this.onSearchInput} saveCar={(newCar) => this.onNewCaAdded(newCar)}/>
                <CarList searchValue={this.state.searchValue} newCar={this.state.newCar}/>
            </div>
        );
    }

    onSearchInput = (event) => {
        const searchValue = event.currentTarget.value;
        console.log("Wartość wyszukiwania: " + searchValue);
        this.setState({
            searchValue
        });
    };

    onNewCaAdded(newCar) {
        console.log("New car added: ", newCar)
        this.setState({
            newCar: newCar
        })
    }
}

export default App;
