// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
require('jest-fetch-mock').enableMocks();

export const allCarsMock = [
    {
        imgSrc: "https://www.abbottsaab.com/wp-content/uploads/2016/02/saab-93-overview.png",
        model: "Saab 9-3 SS",
        desc: "1.5 benzyna"
    },
    {
        imgSrc: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/Mazda-323.png",
        model: "Mazda 323 BJ",
        desc: "1.6 Benzyna + Gaz"
    },
    {
        imgSrc: "http://namasce.pl/wp-content/uploads/2014/11/renault_megane.gif",
        model: "Renault Megane",
        desc: "1.6 Benzyna + Gaz"
    }];