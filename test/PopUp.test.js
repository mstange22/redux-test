import React from 'react';
import renderer from 'react-test-renderer';
import PopUp from '../src/components/PopUp';

const props = { title: 'Pop-Up Title', message: 'Your message goes here' };

test('changes the class when hovered', () => {
  const component = renderer.create(
    <PopUp {...props} />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
