import Button from "react-bootstrap/Button";
import React, {useCallback, useState} from "react";
import {AddCarModal} from "./cars/containers/add-car/AddCarModal";
import {searchCars} from "./store/actions";
import {useDispatch, useSelector} from "react-redux";

export function AppHeader() {
    const [show, setShow] = useState(false);
    const searchValue = useSelector(state => state.carsSearch);
    const dispatch = useDispatch();

    function showAddCar() {
        setShow(true);
    }

    const hideAddCar = useCallback(() => {
        setShow(false);
    }, [searchValue]);

    function handleSearchChange(e) {
        dispatch(searchCars(e.currentTarget.value));
    }

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
                                <a className="nav-link" href="#">Lista samochodów<span
                                    className="sr-only">(current)</span></a>
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
                                       value={searchValue} onChange={handleSearchChange}/>
                            </li>
                            <li className="nav-item">
                                <Button className="text-line" onClick={showAddCar}>Dodaj auto</Button>
                            </li>
                        </ul>
                    </div>

                </nav>
                <AddCarModal show={show} onClose={hideAddCar}/>
            </header>
        </div>
    );

}