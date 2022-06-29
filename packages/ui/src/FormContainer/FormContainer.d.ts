import React, { FormHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';
export interface FormContainerProps {
    defaultValues?: any;
    children?: React.ReactNode;
    onSuccess?: (values: any) => void;
    handleSubmit?: (values: any) => void;
    formContext?: UseFormReturn<any>;
    FormProps?: FormHTMLAttributes<HTMLFormElement>;
    shouldFocusError?: boolean;
}
declare const FormContainer: React.ForwardRefExoticComponent<FormContainerProps & React.RefAttributes<HTMLFormElement>>;
export default FormContainer;
