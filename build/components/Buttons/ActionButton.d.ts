import * as React from 'react';
interface IActionButtonProps {
    text: string;
    link?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
}
declare const ActionButton: React.FC<IActionButtonProps>;
export default ActionButton;
