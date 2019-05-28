import React from 'react';
import renderer from 'react-test-renderer';
import Addition from '../src/Addition';

xtest('This is a test', () => {
  const component = renderer.create(
    <Addition />,
    // <div className="addition-container">
    //   <h2>Addition</h2>
    //   <h2>0</h2>
    //   <h2>+</h2>
    //   <h2>0</h2>
    //   <h2>=</h2>
    //   <h2>0</h2>
    // </div>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
