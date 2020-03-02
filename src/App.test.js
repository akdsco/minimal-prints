import React from "react";
import {shallow} from 'enzyme';
import App from "./App";
import {findByTestAttr} from "./test/testUtil";

/**
 * Factory function to create a a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<App {...props} />)
};

test('renders app component without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders header component without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-header');
  expect(appComponent.length).toBe(1)
});

test('renders photos component without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-photos');
  expect(appComponent.length).toBe(1)
});