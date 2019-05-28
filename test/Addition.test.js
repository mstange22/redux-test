import React from 'react';
import renderer from 'react-test-renderer';
import { Addition } from '../src/components/Addition';

test('This is a test', () => {
  const props = { a: 0, b: 0 };
  const component = renderer.create(
    <Addition {...props} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
