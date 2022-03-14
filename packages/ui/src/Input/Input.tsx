import clsx from 'clsx';
import React, { ChangeEventHandler, useState } from 'react';
import styled from '@emotion/styled';

interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const FieldWrapper = styled.div`
  &.has-label {
    margin-top: 24px;
  }

  margin-bottom: 16px;
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
  border: 1px solid var(--kuka-border);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.035);
  transition: all 0.2s ease;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.focused {
    background-color: #fff;
    box-shadow: rgb(218 218 219 / 30%) 0px 0px 0px 3px;
  }
`;

const StyledInput = styled.input`
  outline: none;
  background: none;
  border: none;
  -webkit-appearance: none;
  padding: 11px 0;
  color: var(--kuka-text-default);
  width: 100%;
  &::placeholder {
    opacity: 1;
    color: #a5afbd;
  }
`;

const LabelWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: -25px;
`;

const StyledLabel = styled.label`
  position: relative;
  font-weight: 500;
  color: var(--kuka-text-default);
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, id, className, value, label, placeholder, onChange }, ref) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
      setFocused(true);
    };

    const handleBlur = () => {
      setFocused(false);
    };

    return (
      <FieldWrapper className={clsx(label && 'has-label')}>
        <InputWrapper className={clsx(focused && 'focused')}>
          <StyledInput
            ref={ref}
            className={className}
            value={value}
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </InputWrapper>
        {label && (
          <LabelWrapper>
            <StyledLabel>{label}</StyledLabel>
          </LabelWrapper>
        )}
      </FieldWrapper>
    );
  }
);
Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text',
};

export default Input;
