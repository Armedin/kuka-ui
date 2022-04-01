import React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';

export interface InputPrefixSuffixProps {
  children?: React.ReactNode;
  type: 'prefix' | 'suffix';
  className?: string;
  disablePointerEvents?: boolean;
}

const InputPrefixSuffifxRoot = styled('div')<InputPrefixSuffixProps>(
  {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },
  props => ({
    ...(props.type === 'prefix' && {
      marginRight: '8px',
    }),
    ...(props.type === 'suffix' && {
      marginLeft: '8px',
    }),
    ...(props.disablePointerEvents === true && {
      pointerEvents: 'none',
    }),
  })
);

const InputPrefixSuffix = React.forwardRef<HTMLElement, InputPrefixSuffixProps>(
  (inProps, ref) => {
    const { children, className, ...other } = inProps;

    return (
      <InputPrefixSuffifxRoot
        className={clsx('KukuiInputPrefixSuffix', className)}
        {...other}
      >
        {children}
      </InputPrefixSuffifxRoot>
    );
  }
);

export default InputPrefixSuffix;
