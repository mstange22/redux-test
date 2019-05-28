import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../src/redux/store';
import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });
const shallowComponent = shallow(<App />);

describe('<App />', () => {
  test('has button', () => {
    expect(shallowComponent.exists('button')).toBe(true);
  });
  test('snapshot test', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
