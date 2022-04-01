import { SxProps } from '@kukui/system';
import React from 'react';
export interface CardContentProps {
    children?: React.ReactNode;
    sx?: SxProps;
}
declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
export default CardContent;
