import React from 'react';
export interface CheckboxProps {
    name: string;
    value: string;
    checked?: boolean;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onChange?: any;
    children?: React.ReactNode;
}
declare const Checkbox: ({ name, value, checked, size, onChange, children, }: CheckboxProps) => JSX.Element;
export default Checkbox;
