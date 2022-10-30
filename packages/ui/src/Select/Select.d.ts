import React from 'react';
import { ControllerProps } from 'react-hook-form';
export interface Option {
    value: string;
    label: string;
    inputValue?: string;
}
export interface SelectProps {
    id?: string;
    options?: Option[];
    value?: any;
    inputValue?: string;
    className?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    helperText?: string;
    validation?: ControllerProps['rules'];
    required?: boolean;
    isControlled?: boolean;
    error?: boolean;
    onChange?: (event: any, value: string | string[]) => void;
    onInputChange?: (event: any) => void;
    onCreateOption?: (value: string) => void;
    isCreatable?: boolean;
    multiple?: boolean;
    filterOptions?: any;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<any>>;
export default Select;
