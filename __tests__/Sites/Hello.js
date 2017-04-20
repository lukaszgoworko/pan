import 'react-native';
import React from 'react';
import Hello from '../../src/App/Sites/Hello.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Hello />
  );
});
