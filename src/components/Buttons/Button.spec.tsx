import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ActionButton, CustomButton } from '.';

test('Renders', async () => {
  const { getByRole } = render(<CustomButton />);
  expect(getByRole('button')).toHaveTextContent('Click Here');
});

test('Renders', async () => {
  const { getByRole } = render(<ActionButton text="Action" />);
  expect(getByRole('button')).toHaveTextContent('Action');
});
