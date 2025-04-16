import React from 'react';
import { render } from '@testing-library/react';
import { BasicSampleComponent } from './sample-component.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicSampleComponent />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
