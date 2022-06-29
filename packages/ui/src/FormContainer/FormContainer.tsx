import React, { FormHTMLAttributes, useEffect } from 'react';
import {
  FormProvider,
  useForm,
  UseFormReturn,
  FieldError,
} from 'react-hook-form';

export interface FormContainerProps {
  defaultValues?: any;
  children?: React.ReactNode;
  onSuccess?: (values: any) => void;
  handleSubmit?: (values: any) => void;
  formContext?: UseFormReturn<any>;
  FormProps?: FormHTMLAttributes<HTMLFormElement>;
  shouldFocusError?: boolean;
}

const FormContainer = React.forwardRef<HTMLFormElement, FormContainerProps>(
  (inProps, ref) => {
    const {
      defaultValues = {},
      onSuccess = () => {},
      children,
      FormProps,
      shouldFocusError = true,
    } = inProps;

    const methods = useForm<typeof defaultValues>({
      defaultValues,
      shouldUnregister: false,
    });
    const {
      handleSubmit,
      setFocus,
      formState: { errors },
    } = methods;

    useEffect(() => {
      if (!shouldFocusError) {
        return;
      }

      const firstError = Object.keys(errors).reduce((field: any, a: any) => {
        return !!errors[field] ? field : a;
      }, null);

      if (firstError) {
        setFocus(firstError);
      }
    }, [shouldFocusError, errors, setFocus]);

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
