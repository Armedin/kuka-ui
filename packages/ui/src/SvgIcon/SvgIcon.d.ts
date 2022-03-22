import React from 'react';
interface SvgIconProps {
    component?: React.ElementType;
    children?: React.ReactChild;
    className?: string;
    sx?: object;
    viewBox?: string;
    fontSize?: 'inherit' | 'lg' | 'md' | 'sm';
}
declare const SvgIcon: React.ForwardRefExoticComponent<SvgIconProps & React.RefAttributes<HTMLElement>>;
export default SvgIcon;
