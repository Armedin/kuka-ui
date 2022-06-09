import clsx from 'clsx';
import React, { ChangeEventHandler, FocusEvent, useState } from 'react';
import styled from '@emotion/styled';
import InputPrefixSuffix from '../InputPrefixSuffix';
import Textarea from '../Textarea';
import { Control, Controller, ControllerProps } from 'react-hook-form';
import ValidationInput from './ValidationInput';
import FormHelperText from '../FormHelperText';
import { shouldForwardProp } from '@kukui/system';

interface InputProps {
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
  onFocus?: any;
  onBlur?: any;
  validation?: ControllerProps['rules'];
  control?: Control<any>;
  required?: boolean;
  error?: boolean;
}

const FieldWrapper = styled.div`
  &.has-label {
    margin-top: 24px;
  }

  position: relative;
  display: inline-block;
  text-align: left;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border-radius: 8px;
  width: 100%;
  padding: 0 11px;
  border-width: 1px;
  background-color: #fff;
  border: 1px solid var(--kukui-input-border);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.035);
  transition: all 0.2s ease;
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.focused {
    background-color: #fff;
    box-shadow: var(--kukui-input-border-focused) 0px 0px 0px 3px;
  }
  &.invalid {
    border: 1px solid var(--kukui-red);

    &.focused {
      box-shadow: rgb(var(--kukui-red-rgb) / 25%) 0px 0px 0px 3px;
    }
  }
`;

const IGNORED_PROPS = ['textarea'];

const InputRoot = styled('input', {
  shouldForwardProp: prop =>
    shouldForwardProp(prop) && !IGNORED_PROPS.includes(prop as any),
})<InputProps>(
  {
    outline: 'none',
    background: 'none',
    border: 'none',
    WebkitAppearance: 'none',
    padding: '11px 0',
    fontFamily: 'inherit',
    letterSpacing: 'inherit',
    color: 'var(--kukui-text-default)',
    width: '100%',
    display: 'block',
    minWidth: 0,
    '&::placeholder': {
      opacity: 1,
      color: '#a5afbd',
    },
    '&:focus': {
      outline: 0,
    },
  },
  props => ({
    ...(props.textarea && {
      height: 'auto',
      resize: 'none',
    }),
  })
);

const LabelWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: -25px;
`;

const StyledLabel = styled.label`
  position: relative;
  font-weight: 500;
  color: var(--kukui-text-default);
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>((inProps, ref) => {
  const {
    type = 'text',
    id,
    className,
    value,
    label,
    minRows,
    maxRows,
    placeholder,
    name,
    helperText,
    onChange,
    onBlur,
    onFocus,
    validation = {},
    prefix,
    suffix,
    control,
    required,
    error,
    textarea = false,
  } = inProps;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.();
  };

  if (required) {
    validation.required = 'This field is required';
  }

  if (type === 'email') {
    validation.pattern = {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email address',
    };
  }

  // if (Object.keys(validation).length && !name) {
  //   console.error(
  //     'KUKUI: `name` attribute must be passed when using the `validation` attribute.'
  //   );
  // }

  // Name will be undefined when it comes from ValidationInput
  // Better to pass another prop instead; smth like isValidation = true
  const hasValidation =
    Object.keys(validation).length > 0 && name !== undefined;

  let InputComponent = 'input' as any;
  if (textarea) {
    InputComponent = Textarea;
  }

  const FinalComponent = (
    <FieldWrapper className={clsx('KukuiFieldWrapper', label && 'has-label')}>
      <InputWrapper
        className={clsx(
          'KukuiInputWrapper',
          focused && 'focused',
          error && 'invalid'
        )}
      >
        {prefix && (
          <InputPrefixSuffix type="prefix">{prefix}</InputPrefixSuffix>
        )}
        <InputRoot
          ref={ref}
          className={clsx('KukuiInput', className)}
          value={value}
          id={id}
          type={type}
          placeholder={placeholder}
          textarea={textarea}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxRows={maxRows}
          minRows={minRows}
          name={name}
          as={InputComponent}
        />
        {suffix && (
          <InputPrefixSuffix type="suffix">{suffix}</InputPrefixSuffix>
        )}
      </InputWrapper>
      {label && (
        <LabelWrapper className="KukuiLabelWrapper">
          <StyledLabel className="KukuiLabel">{label}</StyledLabel>
        </LabelWrapper>
      )}
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FieldWrapper>
  );

  return hasValidation ? (
    <ValidationInput
      name={name}
      validation={validation}
      control={control}
      input={
        <Input
          {...{
            placeholder,
            type,
            id,
            className,
            label,
            minRows,
            maxRows,
            prefix,
            suffix,
            required,
            textarea,
            helperText,
          }}
        />
      }
    />
  ) : (
    FinalComponent
  );
});

Input.displayName = 'Input';

export default Input;
