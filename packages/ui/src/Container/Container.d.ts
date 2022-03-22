import React from 'react';
interface ContainerProps {
    component?: React.ElementType;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    disableGutters?: boolean;
    sx?: object;
    children?: React.ReactNode;
}
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLElement>>;
export default Container;
