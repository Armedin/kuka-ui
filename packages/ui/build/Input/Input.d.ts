import React, { ChangeEventHandler } from 'react';
interface InputProps {
    type?: 'text' | 'number' | 'email' | 'password';
    id?: string;
    className?: string;
    value?: string;
    placeholder?: string;
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
