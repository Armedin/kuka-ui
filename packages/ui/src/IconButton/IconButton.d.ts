import React from 'react';
interface ButtonProps {
    color?: 'primary';
    fullWidth?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const IconButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
