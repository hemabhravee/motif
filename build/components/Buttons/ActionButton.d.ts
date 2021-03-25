import * as React from 'react';
export interface IActionButtonProps {
    text: string;
    link?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
}
declare const ActionButton: React.FC<IActionButtonProps>;
export default ActionButton;
