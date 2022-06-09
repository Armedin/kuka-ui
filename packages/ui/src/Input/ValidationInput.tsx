import React from 'react';
import { Control, Controller, ControllerProps } from 'react-hook-form';

export interface ValidationInputProps {
  name: string;
  control?: Control<any>;
  validation: ControllerProps['rules'];
  input: React.ReactElement;
}

const ValidationInput = ({
  name,
  control,
  input,
  validation,
}: ValidationInputProps) => {
  const InputComponent = input;
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
      }) => {
        const NewInput = React.cloneElement(InputComponent, {
          ...{ onChange },
          ...{ onBlur },
          value: value,
          // For Currency Input
          ...(input.props.onValueChange && {
            onValueChange: (value: any) => onChange(value),
            value: undefined,
          }),
          helperText: error ? error.message : input.props.helperText,
          error: error ? true : false,
        });
        return NewInput;
      }}
    />
  );
};

export default ValidationInput;
