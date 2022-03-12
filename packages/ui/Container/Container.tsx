import styledSx, { extendSxProp } from '@kuka/system/styledSx';
import styled from '@emotion/styled';
import React from 'react';
import breakpoints from '@kuka/system/breakpoints';

interface ContainerProps {
  component?: React.ElementType;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disableGutters?: boolean;
  sx?: object;
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
    ...(props.maxWidth !== 'xs' && {
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
    const props = extendSxProp({ ...inProps });

    const { component, ...other } = props;

    return <ContainerRoot as={component} ref={ref} {...other} />;
  }
);

Container.displayName = 'Container';

Container.defaultProps = {
  component: 'div',
  maxWidth: 'lg',
  sx: {},
};

export default Container;
