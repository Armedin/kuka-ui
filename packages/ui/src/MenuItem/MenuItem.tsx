import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

const MenuItemRoot = styled('li')({
  padding: '6px 16px',
  width: '100%',
  cursor: 'pointer',
  '&[aria-selected="true"]': {
    backgroundColor: 'var(--kukui-accent-100)',
  },
  '&:hover': {
    backgroundColor: 'var(--kukui-accent-100)',
  },
});

const MenuItem = React.forwardRef<HTMLLIElement, HTMLAttributes<any>>(
  (inProps, ref) => {
    const { children, ...other } = inProps;

    return (
      <MenuItemRoot ref={ref} {...other}>
        {children}
      </MenuItemRoot>
    );
  }
);

export default MenuItem;
