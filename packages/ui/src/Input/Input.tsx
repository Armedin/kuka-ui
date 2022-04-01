import clsx from 'clsx';
import React, { ChangeEventHandler, useState } from 'react';
import styled from '@emotion/styled';
import InputPrefixSuffix from '../InputPrefixSuffix';
import Textarea from '../Textarea';

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
`;

const InputRoot = styled('input')<InputProps>(
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
    onChange,
    prefix,
    suffix,
    textarea = false,
  } = inProps;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  let InputComponent = 'input' as any;

  if (textarea) {
    InputComponent = Textarea;
  }

  return (
    <FieldWrapper className={clsx('KukuiFieldWrapper', label && 'has-label')}>
      <InputWrapper className={clsx('KukuiInputWrapper', focused && 'focused')}>
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
    </FieldWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
