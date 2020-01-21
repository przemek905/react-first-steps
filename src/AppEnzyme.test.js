import App from "./App";
import React from "react";
import {shallow} from "enzyme";
import {AppHeader} from "./AppHeader";
import {CarList} from "./cars/CarList";

it('renders without crashing', () => {
    shallow(<App/>);
});

it('includes AppHeader', () => {
    const app = shallow(<App/>);
    expect(app.containsMatchingElement(<AppHeader/>)).toEqual(true)
});

it('includes CarList', () => {
    const app = shallow(<App/>);
    expect(app.containsMatchingElement(<CarList/>)).toEqual(true)
});