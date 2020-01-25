import React from 'react';

export class CarItem extends React.Component {
    render() {
        const {car} = this.props;

        return (
            <li className="list-group-item list-group-item-action" onClick={this.logItem}>
              <img src={car.imgSrc}
                width="250" height="100" alt="" />
              <div className="content">
                <h4 className="header">{car.model}</h4>
                <div className="description">{car.desc}</div>
              </div>
            </li>
          );
    }

    logItem = () => {
        console.log(" Click on: " + this.props.car.model)
    }

  }