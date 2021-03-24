import * as React from 'react';
import { ActionButton, CustomButton } from '.';
import { FaArrowRight, FaCoffee } from 'react-icons/fa';

export default { title: 'Button' };

export const Basic = (): React.ReactNode => <CustomButton />;
export const Action = (): React.ReactNode => <ActionButton text="Hello" />;
export const WithIcons = (): React.ReactNode => (
  <ActionButton
    text="Buy me a coffee!"
    startIcon={<FaCoffee />}
    endIcon={<FaArrowRight size="1rem" />}
    link="https://www.buymeacoffee.com/"
  />
);
