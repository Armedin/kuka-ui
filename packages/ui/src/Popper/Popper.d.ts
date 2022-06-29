/// <reference types="react" />
export interface PopperProps {
    open: boolean;
    anchorEl: Element;
    children?: React.ReactNode;
    style?: Object;
    placement?: 'auto-end' | 'auto-start' | 'auto' | 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    onClickAway?: () => void;
}
declare const Popper: import("react").ForwardRefExoticComponent<PopperProps & import("react").RefAttributes<HTMLElement>>;
export default Popper;
