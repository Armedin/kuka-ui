import React, { useCallback, useEffect, useRef } from 'react';
import { useForkRef } from '../utils';

export interface ClickAwayListenerProps {
  children: any; // should really be React.ReactElement
  onClickAway?: () => void;
}

const clickedScrollbar = (event: MouseEvent) => {
  return (
    document.documentElement.clientWidth < event.clientX ||
    document.documentElement.clientHeight < event.clientY
  );
};

const ClickAwayListener = (props: ClickAwayListenerProps) => {
  const { children, onClickAway } = props;
  const activatedRef = React.useRef(false);
  const nodeRef = useRef<Element>(null);
  const handleRef = useForkRef(children.ref, nodeRef);

  useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);

  // should be event: MouseEvent | TouchEvent
  const handleClickEvent = useCallback((event: any) => {
    // Ignore clicks on scrollbar
    if (
      !activatedRef.current ||
      !nodeRef.current ||
      ('clientX' in event && clickedScrollbar(event))
    ) {
      return;
    }

    let insideDOM;

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM =
        !document.documentElement.contains(event.target) ||
        nodeRef.current.contains(event.target);
    }

    if (!insideDOM) {
      onClickAway?.();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickEvent);

    return () => {
      document.removeEventListener('click', handleClickEvent);
    };
  }, []);

  return (
    <React.Fragment>
      {React.cloneElement(children, { ref: handleRef })}
    </React.Fragment>
  );
};

export default ClickAwayListener;
