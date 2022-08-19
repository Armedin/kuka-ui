import { SxProps } from '@kukui/system';
import React, { HTMLAttributes } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    sx?: SxProps;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default Card;
