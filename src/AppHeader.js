import Button from "react-bootstrap/Button";
import React from "react";

export class AppHeader extends React.Component {
    render() {
        const {searchValue} = this.props;
        return (
            <div>
                <header className="ui fixed menu">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mr-auto">
                        <a href="#" className="navbar-brand">
                            <img src="http://dobroskok.pl/files/4013/2567/3324/auta_head.png"
                                 width="150" height="50" alt=""/>
                            Lista samochodów
                        </a>
                        <div className="collapse navbar-collapse mr-5">
                            <Button>Dodaj</Button>
                        </div>

                        <input className="form-control mr-3" role="search" placeholder="Wyszukaj"
                               onInput={searchValue}/>
                    </nav>
                </header>
            </div>
        );
    }
}