import Button from "react-bootstrap/Button";
import React from "react";
import {AddCarModal} from "./cars/containers/add-car/AddCarModal";

export class AppHeader extends React.Component {
    state = { show: false };

    showAddCar = () => {
        this.setState({ show: true });
    };

    hideAddCar = () => {
        this.setState({ show: false });
    };

    saveCar(car) {
        this.props.saveCar(car);
    }

    render() {
        const {searchValue} = this.props;
        return (
            <div>
                <header className="ui fixed menu">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mr-auto">
                        <a href="#" className="navbar-brand">
                            <img src="http://dobroskok.pl/files/4013/2567/3324/auta_head.png"
                                 width="150" height="50" alt=""/>
                        </a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active text-line">
                                    <a className="nav-link" href="#">Lista samochodów<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item text-line">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>

                        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-2">
                                    <input className="form-control mr-3" role="search" placeholder="Wyszukaj"
                                           onInput={searchValue}/>
                                </li>
                                <li className="nav-item">
                                    <Button className="text-line" onClick={this.showAddCar}>Dodaj auto</Button>
                                </li>
                            </ul>
                        </div>

                    </nav>
                <AddCarModal show={this.state.show} onClose={this.hideAddCar} addCar={(car) => this.saveCar(car)}/>
                </header>
            </div>
        );
    }

}