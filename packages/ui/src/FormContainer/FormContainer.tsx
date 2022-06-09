import React, { FormHTMLAttributes } from 'react';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';

export interface FormContainerProps {
  defaultValues?: any;
  children?: React.ReactNode;
  onSuccess?: (values: any) => void;
  handleSubmit?: (values: any) => void;
  formContext?: UseFormReturn<any>;
  FormProps?: FormHTMLAttributes<HTMLFormElement>;
}

const FormContainer = React.forwardRef<HTMLFormElement, FormContainerProps>(
  (inProps, ref) => {
    const {
      defaultValues = {},
      onSuccess = () => {},
      children,
      FormProps,
    } = inProps;

    const methods = useForm<typeof defaultValues>({
      defaultValues,
    });
    const { handleSubmit } = methods;

    return (
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSuccess)}
          ref={ref}
          noValidate
          {...FormProps}
        >
          {children}
        </form>
      </FormProvider>
    );
  }
);

export default FormContainer;
