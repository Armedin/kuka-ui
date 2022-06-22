import styled from '@emotion/styled';
import { createPopper } from '@popperjs/core';
import { forwardRef, useEffect, useRef } from 'react';
import { useForkRef } from '../utils';

export interface PopperProps {
  anchorEl: Element;
  children?: React.ReactNode;
  style?: Object;
}

const PopperRoot = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
});

const Popper = forwardRef<HTMLElement, PopperProps>((inProps, ref) => {
  const { children, anchorEl, style } = inProps;
  const tooltipRef = useRef(null);
  const finalTooltipRef = useForkRef(tooltipRef, ref);
  const popperRef = useRef<any | null>(null);

  useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });

  useEffect(() => {
    const popper = createPopper(anchorEl, tooltipRef.current!, {});

    return () => {
      popper.destroy();
    };
  }, [anchorEl]);

  return (
    <PopperRoot
      ref={finalTooltipRef}
      role="tooltip"
      className="KukuiPopper"
      style={style}
    >
      {children}
    </PopperRoot>
  );
});

export default Popper;
