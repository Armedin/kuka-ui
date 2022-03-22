import React from 'react';
interface ButtonProps {
    color?: 'primary';
    fullWidth?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
