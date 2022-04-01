import React, { ChangeEventHandler } from 'react';
interface InputProps {
    type?: 'text' | 'number' | 'email' | 'password';
    id?: string;
    className?: string;
    value?: string;
    maxRows?: number;
    minRows?: number;
    placeholder?: string;
    label?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    textarea?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
