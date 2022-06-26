import styled from '@emotion/styled';
import { createPopper } from '@popperjs/core';
import { forwardRef, useEffect, useRef } from 'react';
import ClickAwayListener from '../ClickAwayListener';
import { useForkRef } from '../utils';

export interface PopperProps {
  open: boolean;
  anchorEl: Element;
  children?: React.ReactNode;
  style?: Object;
  placement?:
    | 'auto-end'
    | 'auto-start'
    | 'auto'
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  onClickAway?: () => void;
}

const PopperRoot = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
});

const Popper = forwardRef<HTMLElement, PopperProps>((inProps, ref) => {
  const {
    children,
    anchorEl,
    style,
    open,
    placement = 'bottom',
    onClickAway,
  } = inProps;
  const tooltipRef = useRef(null);
  const finalTooltipRef = useForkRef(tooltipRef, ref);
  const popperRef = useRef<any | null>(null);

  useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });

  useEffect(() => {
    if (!anchorEl || !open) {
      return;
    }

    const popper = createPopper(anchorEl, tooltipRef.current!, { placement });

    return () => {
      popper.destroy();
    };
  }, [anchorEl, open]);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <PopperRoot
        ref={finalTooltipRef}
        role="tooltip"
        className="KukuiPopper"
        style={style}
      >
        {children}
      </PopperRoot>
    </ClickAwayListener>
  );
});

export default Popper;
