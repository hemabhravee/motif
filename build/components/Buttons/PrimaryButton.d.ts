import { ButtonProps } from '@material-ui/core';
import * as React from 'react';
interface IButtonProps {
    text: string;
}
declare const PrimaryButton: React.FC<IButtonProps & ButtonProps>;
export default PrimaryButton;
