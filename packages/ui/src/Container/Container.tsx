import { styledSx, breakpoints, SxProps } from '@kukui/system';
import styled from '@emotion/styled';
import React from 'react';

interface ContainerProps {
  component?: React.ElementType;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disableGutters?: boolean;
  sx?: SxProps;
  children?: React.ReactNode;
}

const ContainerRoot = styled('span')<ContainerProps>(
  {
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    display: 'block',
  },
  props => ({
    ...styledSx(props),
    ...(props.maxWidth &&
      props.maxWidth !== 'xs' && {
        [breakpoints.up(props.maxWidth)]: {
          maxWidth: `${breakpoints.values[props.maxWidth]}px`,
        },
      }),
    ...(!props.disableGutters && {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      [breakpoints.up('sm')]: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      },
    }),
  })
);

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  (inProps, ref) => {
    const { component = 'div', maxWidth = 'lg', ...other } = inProps;

    return (
      <ContainerRoot as={component} maxWidth={maxWidth} ref={ref} {...other} />
    );
  }
);

Container.displayName = 'Container';

export default Container;
