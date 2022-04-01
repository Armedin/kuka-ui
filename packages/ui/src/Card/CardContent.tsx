import styled from '@emotion/styled';
import { SxProps, styledSx } from '@kukui/system';
import React from 'react';

export interface CardContentProps {
  children?: React.ReactNode;
  sx?: SxProps;
}

const CardBody = styled('div')(
  {
    padding: '2rem',
  },
  props => ({ ...styledSx(props) })
);

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  (inProps, ref) => {
    const { children, ...other } = inProps;
    return (
      <CardBody className="KukuiCardBody" ref={ref} {...other}>
        {children}
      </CardBody>
    );
  }
);

CardContent.displayName = 'CardContent';

export default CardContent;
