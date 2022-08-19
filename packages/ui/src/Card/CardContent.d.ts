import { SxProps } from '@kukui/system';
import React, { HTMLAttributes } from 'react';
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    sx?: SxProps;
}
declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
export default CardContent;
