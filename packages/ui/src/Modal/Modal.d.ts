import React from 'react';
interface ModalProps {
    open?: boolean;
    onClose?(): void;
}
declare const Modal: ({ open, children, onClose, }: React.PropsWithChildren<ModalProps>) => JSX.Element;
export default Modal;
