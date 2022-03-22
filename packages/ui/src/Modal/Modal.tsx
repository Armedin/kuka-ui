import React from 'react';
import { Transition } from 'react-transition-group';
import styled from '@emotion/styled';
import { IconButton } from '@kukui/ui';

interface ModalProps {
  open?: boolean;
  onClose?(): void;
}

const duration = 400;
const defaultStyle = {
  transition: `transform ${duration}ms cubic-bezier(0.25, 0.8, 0.25, 1) 0ms, opacity ${duration}ms cubic-bezier(0.25, 0.8, 0.25, 1) 0ms`,
  opacity: 0,
};

const transitionStyles: { [key: string]: any } = {
  entering: { transform: 'scale(0.5)', opacity: 0 },
  entered: { transform: 'scale(1)', opacity: 1 },
  exiting: { transform: 'scale(1)', opacity: 1 },
  exited: { transform: 'scale(0.5)', opacity: 0 },
};

const overlayTransition: { [key: string]: any } = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const OverlayBackdrop = styled('div')({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  background: 'rgba(0,0,0,.32)',
  opacity: 0,
});
const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  zIndex: 1000,
});
const ModalBody = styled('div')({
  background: '#fff',
  boxShadow:
    '0 11px 15px -7px #0003, 0 24px 38px 3px #00000024, 0 9px 46px 8px #0000001f',
  maxWidth: '80%',
  maxHeight: '80%',
  overflow: 'auto',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  width: '640px',
});
const CloseButtonContainer = styled('div')({
  paddingRight: '.75rem',
  paddingTop: '.75rem',
  position: 'absolute',
  top: 0,
  right: 0,
});
const CloseButton = styled(IconButton)({
  background: 'transparent',
  color: 'var(--text-secondary)',

  '&:hover': {
    backgroundColor: 'var(--color-gray-100)',
  },

  i: {
    fontSize: '1.35rem',
  },
});
const Content = styled('div')({
  padding: '1.5rem',
});

const Modal = ({
  open,
  children,
  onClose,
}: React.PropsWithChildren<ModalProps>) => {
  return (
    <>
      <Transition in={open} timeout={duration} mountOnEnter unmountOnExit>
        {state => (
          <OverlayBackdrop
            style={{ ...defaultStyle, ...overlayTransition[state] }}
          />
        )}
      </Transition>
      <Transition in={open} timeout={duration} mountOnEnter unmountOnExit>
        {state => (
          <Container style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <ModalBody>
              <CloseButtonContainer>
                <CloseButton onClick={onClose}>
                  <i className="fal fa-times"></i>
                </CloseButton>
              </CloseButtonContainer>
              <Content>{children}</Content>
            </ModalBody>
          </Container>
        )}
      </Transition>
    </>
  );
};

export default Modal;
