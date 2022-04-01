import { SxProps } from '@kukui/system';
import React from 'react';
interface ContainerProps {
    component?: React.ElementType;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    disableGutters?: boolean;
    sx?: SxProps;
    children?: React.ReactNode;
}
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLElement>>;
export default Container;
