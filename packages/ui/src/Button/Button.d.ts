import React from 'react';
import { SxProps } from '@kukui/system';
export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'inherit';
    sx?: SxProps;
    variant?: 'text' | 'contained';
    size?: 'small' | 'large';
    fullWidth?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: any) => void;
    type?: 'button' | 'reset' | 'submit';
}
export declare const StyledButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & ButtonProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
