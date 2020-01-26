import Button from "react-bootstrap/Button";
import React from "react";
import {AddCarContainer, AddCarModal} from "./cars/containers/add-car/AddCarModal";
import {searchCars} from "./store/actions";
import {connect} from "react-redux";

export class AppHeader extends React.Component {
    state = { show: false };

    showAddCar = () => {
        this.setState({ show: true });
    };

    hideAddCar = () => {
        this.setState({ show: false });
    };

    handleSearchChange = e => {
        this.props.searchCars(e.currentTarget.value);
    };

    render() {
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
                                           value={this.props.searchCars.carsSearch} onChange={this.handleSearchChange}/>
                                </li>
                                <li className="nav-item">
                                    <Button className="text-line" onClick={this.showAddCar}>Dodaj auto</Button>
                                </li>
                            </ul>
                        </div>

                    </nav>
                <AddCarContainer show={this.state.show} onClose={this.hideAddCar}/>
                </header>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        carsSearch: state.carsSearch
    };
};

const mapDispatchToProps = { searchCars };

export const AppHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader);