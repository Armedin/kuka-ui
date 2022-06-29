import React from 'react';
import { PopperProps } from '../Popper';
export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
    open: boolean;
    anchorEl: Element;
    children?: React.ReactNode;
    PopperProps?: Partial<PopperProps>;
    closeOnClickAway?: boolean;
    onClose?: () => void;
}
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<any>>;
export default Menu;
