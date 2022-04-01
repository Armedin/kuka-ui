import { SxProps } from '@kukui/system';
import React from 'react';
export interface BoxProps {
    component?: React.ElementType;
    className?: string;
    sx?: SxProps;
    children?: React.ReactNode;
}
declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLElement>>;
export default Box;
