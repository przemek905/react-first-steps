import React from "react";
import {shallow} from "enzyme";
import {CarList} from "./CarList";
import {allCarsMock} from "../setupTests";

beforeAll(() => {
    fetch.mockResponse(JSON.stringify(allCarsMock));
});

it('renders without crashing', () => {
    shallow(<CarList/>);
});

it('shows message when there are no cars', () => {
    const carList = shallow(<CarList searchValue={""} />);
    carList.setState({filteredCars: []});
    expect(carList.text()).toContain('No results for this search!');
});

it('shows all cars when no filter', () => {
    const carList = shallow(<CarList searchValue={""} />);
    setTimeout( () => {
        carList.update();
        expect(carList.state().filteredCars.length).toEqual(allCarsMock.length);
    })
});

it('shows filter cars when search filter', () => {
    //given
    const carList = shallow(<CarList searchValue="" />);
    setTimeout( () => {
        carList.update();
        expect(carList.state().filteredCars.length).toEqual(3);
    });

    //when
    carList.setProps({searchValue: "Ma"});

    //then
    setTimeout( () => {
        expect(carList.state().filteredCars.length).toEqual(1);
        expect(carList.find('CarItem').prop('car')).toEqual({
            imgSrc: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/Mazda-323.png",
            model: "Mazda 323 BJ",
            desc: "1.6 Benzyna + Gaz"
        });
    });

    //when
    carList.setProps({searchValue: "M"});

    //then
    setTimeout( () => {
        expect(carList.state().filteredCars.length).toEqual(2);
    });
});