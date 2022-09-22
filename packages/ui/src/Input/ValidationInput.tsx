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
        field: { value, onChange, onBlur, ref },
        fieldState: { error },
      }) => {
        const NewInput = React.cloneElement(InputComponent, {
          ...{ onChange },
          ...{ onBlur },
          value: value,
          // For Currency Input
          ...('onValueChange' in input.props && {
            onValueChange: (value: any) => {
              onChange(value);
              input.props.onValueChange(value);
            },
            value: input.props.value, // using the value from above causes things like 12,3454
          }),
          helperText: error ? error.message : input.props.helperText,
          error: error ? true : false,
          ref,

          // All for Select Input
          ...('onChange' in input.props && {
            onChange: (event: any) => {
              input.props.onChange(event);
            },
          }),
          ...('value' in input.props && {
            value: input.props.value,
          }),
          ...('onBlur' in input.props &&
            'actualValue' in input.props && {
              onBlur: (event: any) => {
                onBlur();
                input.props.onBlur(event);
                onChange(input.props.actualValue);
              },
            }),
          ...('ref' in input.props && {
            ref: input.props.ref,
          }),
        });

        return NewInput;
      }}
    />
  );
};

export default ValidationInput;
