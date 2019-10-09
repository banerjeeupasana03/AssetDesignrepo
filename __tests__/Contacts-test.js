/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../Comp/contacts';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Contacts />);
});
