import React, { ChangeEventHandler } from 'react';
import { Control, ControllerProps } from 'react-hook-form';
export interface InputProps {
    type?: 'text' | 'number' | 'email' | 'password';
    id?: string;
    className?: string;
    value?: string;
    name?: string;
    maxRows?: number;
    minRows?: number;
    placeholder?: string;
    label?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    textarea?: boolean;
    helperText?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClick?: (event: any) => void;
    onFocus?: any;
    onBlur?: any;
    validation?: ControllerProps['rules'];
    control?: Control<any>;
    required?: boolean;
    error?: boolean;
    inputRef?: any;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<any>>;
export default Input;
