import styled from '@emotion/styled';
import React from 'react';
import MenuItem from '../MenuItem';

const MenuRoot = styled('ul')({
  boxShadow: 'rgb(0 0 0 / 10%) 0px 8px 16px, rgb(0 0 0 / 10%) 0px 3px 8px',
  background: '#fff',
  borderRadius: '8px',
  padding: '8px 0',
});

const Menu = React.forwardRef<any, any>((inProps, ref) => {
  const { children, ...other } = inProps;
  return (
    <MenuRoot ref={ref} {...other}>
      {children}
    </MenuRoot>
  );
});

export default Menu;
