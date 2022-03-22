import React from 'react';
interface BoxProps {
    component?: React.ElementType;
    className?: string;
    sx?: object;
    children?: React.ReactNode;
}
declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLElement>>;
export default Box;
