import React from 'react';
import './App.css';
import {CarList} from "./cars/CarList";
import {AppHeader} from "./AppHeader";


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            searchValue: ""
        }
    }

    render() {
        return (
            <div>
                <AppHeader searchValue={this.onSearchInput}/>
                <CarList searchValue={this.state.searchValue}/>
            </div>
        );
    }

    onSearchInput = (event) => {
        const searchValue = event.currentTarget.value;
        console.log("Wartość wyszukiwania: " + searchValue);
        this.setState({
            searchValue
        });
    }
}

export default App;
