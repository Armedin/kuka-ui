import styled from '@emotion/styled';
import React from 'react';
import Popper, { PopperProps } from '../Popper';

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  open: boolean;
  anchorEl: Element;
  children?: React.ReactNode;
  PopperProps?: Partial<PopperProps>;
  closeOnClickAway?: boolean;
  onClose?: () => void;
}

const MenuRoot = styled('ul')({
  outline: 0,
  boxShadow:
    'rgb(255 255 255) 0px 0px 0px 0px, rgb(0 0 0 / 5%) 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px',
  background: '#fff',
  borderRadius: '8px',
  padding: '8px 0',
  display: 'block',
});

const Menu = React.forwardRef<any, MenuProps>((inProps, ref) => {
  const {
    children,
    anchorEl,
    open,
    PopperProps,
    onClose,
    closeOnClickAway = true,
    ...other
  } = inProps;

  const handleClickAway = () => {
    if (!closeOnClickAway) {
      return;
    }

    onClose?.();
  };

  return open ? (
    <Popper
      anchorEl={anchorEl}
      ref={ref}
      open={open}
      onClickAway={handleClickAway}
      {...PopperProps}
    >
      <MenuRoot {...other}>{children}</MenuRoot>
    </Popper>
  ) : (
    <></>
  );
});

export default Menu;
