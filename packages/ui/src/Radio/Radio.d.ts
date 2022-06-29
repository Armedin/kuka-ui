import React from 'react';
export interface RadioProps {
    name: string;
    value: string;
    selected?: boolean;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onChange?: any;
    children?: React.ReactNode;
}
declare const Radio: ({ name, value, selected, size, onChange, children, }: RadioProps) => JSX.Element;
export default Radio;
