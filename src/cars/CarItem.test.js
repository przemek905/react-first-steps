import React from "react";
import {mount, shallow, render} from "enzyme";
import {CarItem} from "./CarItem";
import {allCars} from "./CarList";

it('renders without crashing', () => {
    shallow(<CarItem car={allCars[0]}/>);
});

it('should call method on click', () => {
    //given
    const carItem = shallow(<CarItem car={allCars[0]}/>);
    const logSpy = jest.spyOn(carItem.instance(), 'logItem');
    expect(logSpy).not.toHaveBeenCalled();

    //when
    carItem.find('li').simulate('click');
    carItem.update();
    carItem.instance().forceUpdate();

    //then
    expect(logSpy).toHaveBeenCalled();
});