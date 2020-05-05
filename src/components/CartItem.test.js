import React from "react";
import {shallow} from 'enzyme';
import CartItem from "./CartItem";
import {findByTestAttr} from "../test/testUtil";

const setup = () => {
  return shallow(<CartItem />)
};

test('renders without errors', () => {
  // const wrapper = setup();
  // const component = findByTestAttr(wrapper, 'component-cart-item');
  // expect(component.length).toBe(1);
});