import styled from '@emotion/styled';
import { createPopper } from '@popperjs/core';
import { forwardRef, useEffect, useRef, useState } from 'react';
import ClickAwayListener from '../ClickAwayListener';
import Portal from '../Portal';
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
    placement: initialPlacement = 'bottom',
    onClickAway,
  } = inProps;
  const [placement, setPlacement] = useState(initialPlacement);
  const tooltipRef = useRef(null);
  const finalTooltipRef = useForkRef(tooltipRef, ref);
  const popperRef = useRef<any | null>(null);

  if (!open) {
    return null;
  }

  // const handlePopperUpdate = data => {
  //   setPlacement(data.placement);
  // };

  // let popperModifiers = [
  //   {
  //     name: 'preventOverflow',
  //     options: {
  //       altBoundary: false,
  //     },
  //   },
  //   {
  //     name: 'flip',
  //     options: {
  //       altBoundary: false,
  //     },
  //   },
  //   {
  //     name: 'onUpdate',
  //     enabled: true,
  //     phase: 'afterWrite',
  //     fn: ({ state }) => {
  //       handlePopperUpdate(state);
  //     },
  //   },
  // ];

  useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });

  useEffect(() => {
    if (!anchorEl || !open) {
      return;
    }

    const popper = createPopper(anchorEl, tooltipRef.current!, {
      placement,
    });

    return () => {
      popper.destroy();
    };
  }, [anchorEl, open]);

  return (
    <Portal>
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
    </Portal>
  );
});

export default Popper;
