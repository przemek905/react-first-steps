import React from 'react';

export function CarItem({car}) {

    function logItem() {
        console.log(" Click on: " + car.model)
    }

    return (
        <li className="list-group-item list-group-item-action" onClick={logItem}>
            <img src={car.imgSrc}
                 width="250" height="100" alt=""/>
            <div className="content">
                <h4 className="header">{car.model}</h4>
                <div className="description">{car.desc}</div>
            </div>
        </li>
    );
}


