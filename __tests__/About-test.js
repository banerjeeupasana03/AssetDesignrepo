/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../Comp/about';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<About />);
});
