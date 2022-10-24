import { SxProps } from '@kukui/system';
import React, { HTMLAttributes } from 'react';
export interface TypographyProps extends HTMLAttributes<any> {
    sx?: SxProps;
    truncate?: boolean;
    component?: React.ElementType;
    children?: React.ReactNode;
    variant?: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2';
}
declare const Typography: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLElement>>;
export default Typography;
