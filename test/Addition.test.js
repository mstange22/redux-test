import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Addition } from '../src/components/Addition';

Enzyme.configure({ adapter: new Adapter() });

const props = { a: 0, b: 0 };
const shallowComponent = shallow(<Addition {...props} />);

describe('<Addition />', () => {
  test('has class', () => {
    expect(shallowComponent.hasClass('addition-container')).toBe(true);
  });
  test('test result', () => {
    expect(shallowComponent.find('.result').text()).toBe('0');
  });
  test('test rows', () => {
    expect(shallowComponent.find('h2').length).toBe(6);
  });
  test('is addition', () => {
    expect(shallowComponent.containsMatchingElement(<h2>+</h2>)).toBe(true);
  });
  test('has equals', () => {
    expect(shallowComponent.containsMatchingElement(<h2>=</h2>)).toBe(true);
  });
});

describe('<Addition /> snapshot', () => {
  test('snapshot test', () => {
    const component = renderer.create(
      <Addition {...props} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
