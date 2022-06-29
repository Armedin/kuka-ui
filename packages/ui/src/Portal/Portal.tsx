import { forwardRef } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
}

const Portal = forwardRef<any, any>((inProps, ref) => {
  const { children } = inProps;

  return ReactDOM.createPortal(children, document.body);
});

export default Portal;
