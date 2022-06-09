import React from 'react';
import styled from '@emotion/styled';
import { shouldForwardProp } from '@kukui/system';

export interface FormHelperTextProps {
  children?: React.ReactNode;
  error?: boolean;
}

const IGNORED_PROPS = ['error'];

const FormHelperTextRoot = styled('p', {
  shouldForwardProp: prop =>
    shouldForwardProp(prop) && !IGNORED_PROPS.includes(prop as any),
})<FormHelperTextProps>(
  {
    color: 'var(--kukui-text-hint)',
    fontSize: '12px',
    marginTop: '6px',
  },
  props => ({
    ...(props.error && {
      color: 'var(--kukui-red)',
    }),
  })
);

const FormHelperText = React.forwardRef<HTMLElement, FormHelperTextProps>(
  (inProps, ref) => {
    const { children, error } = inProps;
    return <FormHelperTextRoot error={error}>{children}</FormHelperTextRoot>;
  }
);

export default FormHelperText;
