import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopUp from '../src/components/PopUp';

configure({ adapter: new Adapter() });

const props = { title: 'Pop-Up Title', message: 'Your message goes here' };
const shallowComponent = shallow(<PopUp {...props} />);

describe('<Pop-Up />', () => {
  test('snapshot test', () => {
    const component = renderer.create(
      <PopUp {...props} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('exists', () => {
    expect(shallowComponent.exists()).toBe(true);
  });
  test('title', () => {
    expect(shallowComponent.find('.popup-title').text()).toBe(`Pop-Up Says "${props.title}"`);
  });
  test('message', () => {
    expect(shallowComponent.find('.popup-message').text()).toBe(props.message);
  });
});
