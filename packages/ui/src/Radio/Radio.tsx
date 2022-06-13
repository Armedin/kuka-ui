import React, { useState } from 'react';
import clsx from 'clsx';
import styled from '@emotion/styled';

export interface RadioProps {
  name: string;
  value: string;
  selected?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onChange?: any;
  children?: React.ReactNode;
}

const RadioRoot = styled('label')({
  display: 'flex',
  userSelect: 'none',
  cursor: 'pointer',
  alignItems: 'center',
});
const RadioInput = styled('input')({
  position: 'absolute',
  visibility: 'hidden',
  zIndex: -1,
});
const RadioChoice = styled('div')({
  position: 'relative',
  height: '24px',
  width: '24px',
  border: '1px solid var(--kukui-accent-300)',
  flex: '0 0 24px',
  transition: 'all 0.2s ease-in-out',
  overflow: 'hidden',
  borderRadius: '50%',

  '&::before': {
    content: "' '",
    opacity: 0,
    height: '12px',
    width: '12px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'var(--kukui-primary)',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '50%',
  },

  '&.KukuiRadioChecked': {
    borderColor: 'var(--kukui-primary)',
    borderWidth: '2px',
    '&::before': { opacity: 1 },
  },
});

const Radio = ({
  name,
  value,
  selected,
  size,
  onChange,
  children,
}: RadioProps) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;
    if (onChange) onChange(id);
  };

  return (
    <RadioRoot className="KukuiRadioRoot" htmlFor={value}>
      <RadioInput
        type="radio"
        className="KukuiRadioInput"
        name={name}
        value={value}
        id={value}
        checked={selected}
        onChange={handleRadioChange}
      />
      <RadioChoice
        className={clsx('KukuiRadioChoice', selected && 'KukuiRadioChecked')}
      />

      {children && <div className="KukuiRadioLabel">{children}</div>}
    </RadioRoot>
  );
};

export default Radio;
