import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomButton from './Button';

test('Renders', async () => {
  const { getByRole } = render(<CustomButton />);
  expect(getByRole('button')).toHaveTextContent('Click Here');
});
