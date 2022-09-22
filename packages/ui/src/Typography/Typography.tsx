import styled from '@emotion/styled';
import { styledSx, SxProps } from '@kukui/system';
import React, { HTMLAttributes } from 'react';

export interface TypographyProps extends HTMLAttributes<any> {
  sx?: SxProps;
  truncate?: boolean;
  component?: React.ElementType;
  children?: React.ReactNode;
  variant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
}

const variantMapping: { [key: string]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p',
};

const TypographyRoot = styled('span')<TypographyProps>(
  {
    margin: 0,
  },
  props => ({
    ...(props.truncate && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
    ...styledSx(props),
  })
);

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (inProps, ref) => {
    const { component, variant = 'body1', ...other } = inProps;

    const Component: any = component || variantMapping[variant] || 'span';

    return <TypographyRoot as={Component} ref={ref} {...other} />;
  }
);

Typography.displayName = 'Typography';

export default Typography;
