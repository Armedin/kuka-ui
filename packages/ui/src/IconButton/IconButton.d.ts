import React from 'react';
interface IconButtonProps {
    color?: 'primary';
    fullWidth?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    size?: 'inherit' | 'large' | 'medium' | 'small';
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
