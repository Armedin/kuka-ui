import React from 'react';
import { SxProps } from '@kukui/system';
export interface SvgIconProps {
    component?: React.ElementType;
    children?: React.ReactChild;
    className?: string;
    onClick?: () => void;
    sx?: SxProps;
    viewBox?: string;
    fontSize?: 'inherit' | 'lg' | 'md' | 'sm';
}
declare const SvgIcon: React.ForwardRefExoticComponent<SvgIconProps & React.RefAttributes<any>>;
export default SvgIcon;
