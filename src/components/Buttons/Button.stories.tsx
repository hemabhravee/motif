import * as React from 'react';
import { ActionButton, CustomButton } from '.';
import { FaArrowRight, FaCoffee } from 'react-icons/fa';
import { Story } from '@storybook/react';
import { IActionButtonProps } from './ActionButton';

export default { title: 'Button' };

export const Basic = (): React.ReactNode => <CustomButton />;

const Template: Story<IActionButtonProps> = (args) => (
  <ActionButton {...args} />
);

const ForAll = {
  circle: false,
  loading: false
};

export const Action = Template.bind({});
Action.args = {
  ...ForAll,
  text: 'Hello'
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  ...Action.args,
  ...ForAll,
  startIcon: <FaCoffee />
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  ...Action.args,
  ...ForAll,
  endIcon: <FaArrowRight size="1rem" />
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  ...ForAll,
  startIcon: <FaCoffee />
};
