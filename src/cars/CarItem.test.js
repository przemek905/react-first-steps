import React from "react";
import {shallow} from "enzyme";
import {CarItem} from "./CarItem";
import {allCarsMock} from "../setupTests";

it('renders without crashing', () => {
    shallow(<CarItem car={allCarsMock[0]}/>);
});

it('should call method on click', () => {
    //given
    const carItem = shallow(<CarItem car={allCarsMock[0]}/>);
    const logSpy = jest.spyOn(carItem.instance(), 'logItem');
    carItem.instance().forceUpdate();
    expect(logSpy).not.toHaveBeenCalled();

    //when
    carItem.find('li').simulate('click');

    //then
    expect(logSpy).toHaveBeenCalled();
});