import React from 'react';
export interface FormHelperTextProps {
    children?: React.ReactNode;
    error?: boolean;
}
declare const FormHelperText: React.ForwardRefExoticComponent<FormHelperTextProps & React.RefAttributes<HTMLElement>>;
export default FormHelperText;
