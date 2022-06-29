/// <reference types="react" />
export interface ClickAwayListenerProps {
    children: any;
    onClickAway?: () => void;
}
declare const ClickAwayListener: (props: ClickAwayListenerProps) => JSX.Element;
export default ClickAwayListener;
