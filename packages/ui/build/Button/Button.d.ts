import React from 'react';
export interface ButtonProps {
    color?: 'primary';
    fullWidth?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export declare const StyledButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & ButtonProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
