import React, { useState } from 'react';
import clsx from 'clsx';
import styled from '@emotion/styled';

export interface CheckboxProps {
  name: string;
  value: string;
  checked?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onChange?: any;
  children?: React.ReactNode;
}

const tickIcon =
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23ffffff'/%3e%3c/svg%3e";

const CheckboxRoot = styled('label')({
  display: 'flex',
  userSelect: 'none',
  cursor: 'pointer',
  alignItems: 'center',
});
const CheckboxInput = styled('input')({
  position: 'absolute',
  visibility: 'hidden',
  zIndex: -1,
});
const CheckboxChoice = styled('div')({
  position: 'relative',
  height: '24px',
  width: '24px',
  border: '1px solid var(--kukui-accent-300)',
  flex: '0 0 24px',
  overflow: 'hidden',
  borderRadius: '6px',

  '&::before': {
    content: "' '",
    opacity: 0,
    height: '12px',
    width: '12px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
  },

  '&.KukuiCheckboxChecked': {
    backgroundColor: 'var(--kukui-primary)',
    borderColor: 'var(--kukui-primary)',
    '&::before': {
      opacity: 1,
      backgroundSize: '100% 100%',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url("${tickIcon}")`,
    },
  },
});

const Checkbox = ({
  name,
  value,
  checked,
  size,
  onChange,
  children,
}: CheckboxProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <CheckboxRoot className="KukuiCheckboxRoot" htmlFor={value}>
      <CheckboxInput
        type="checkbox"
        className="KukuiCheckboxInput"
        name={name}
        value={value}
        id={value}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <CheckboxChoice
        className={clsx(
          'KukuiCheckboxChoice',
          checked && 'KukuiCheckboxChecked'
        )}
      />

      {children && <div className="KukuiCheckboxLabel">{children}</div>}
    </CheckboxRoot>
  );
};

export default Checkbox;
