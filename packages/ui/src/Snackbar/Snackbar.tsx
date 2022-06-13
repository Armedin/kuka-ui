import styled from '@emotion/styled';
import React, { FC, createContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const defaultPosition = 'bottom-right';
export const defaultDuration = 5000;
export const defaultInterval = 250;

export const SnackbarContext = createContext<any | null>({});

const SnackbarWrapper = styled(CSSTransition)`
  display: flex;
  align-items: center;
  margin: 24px;
  position: fixed;
  z-index: 99;
  transition: opacity 150ms, transform 150ms;
  pointer-events: none;
  right: 0;
  bottom: 0px;
  justify-content: right;

  &.snackbar-enter,
  &.snackbar-exit-active {
    opacity: 0;
  }
  &.snackbar-enter-active {
    opacity: 1;
  }
  &.snackbar-enter-top-left,
  &.snackbar-enter-top-center,
  &.snackbar-enter-top-right,
  &.snackbar-exit-active-top-left,
  &.snackbar-exit-active-top-center,
  &.snackbar-exit-active-top-right {
    transform: translateY(-16px);
  }
  &.snackbar-enter-bottom-left,
  &.snackbar-enter-bottom-center,
  &.snackbar-enter-bottom-right,
  &.snackbar-exit-active-bottom-left,
  &.snackbar-exit-active-bottom-center,
  &.snackbar-exit-active-bottom-right {
    transform: translateY(16px);
  }
  &.snackbar-enter-active-top-left,
  &.snackbar-enter-active-top-center,
  &.snackbar-enter-active-top-right,
  &.snackbar-enter-active-bottom-left,
  &.snackbar-enter-active-bottom-center,
  &.snackbar-enter-active-bottom-right {
    transform: translateY(0px);
  }
`;
const SnackbarRoot = styled('div')`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;
  min-width: 340px;
  max-width: 670px;
  background-color: #333;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 20px;
  text-align: left;

  .KukuiSnackbarText {
    flex-grow: 1;
    padding: 14px 16px;
    margin: 0;
    pointer-events: auto;
  }

  .KukuiSnackbarClose {
    flex-shrink: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 36px;
    height: 36px;
    padding: 8px;
    margin: 0 8px 0 0;
    cursor: pointer;
    position: relative;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.9);

    &::before {
      content: '';
      background-color: #fff;
      border-radius: 50%;
      opacity: 0;
      position: absolute;
      transition: opacity 120ms linear;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
    }

    &:hover {
      &::before {
        opacity: 0.08;
      }
    }
  }
`;

const Snackbar: FC<{}> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [duration, setDuration] = useState(defaultDuration);
  const [timeoutId, setTimeoutId] = useState(0);

  const triggerSnackbar = (text: string, duration: number) => {
    setText(text);
    setDuration(duration);
    setOpen(true);
  };

  const openSnackbar = (text: string, duration: number) => {
    if (open === true) {
      setOpen(false);
      setTimeout(() => {
        triggerSnackbar(text, duration);
      }, defaultInterval);
    } else {
      triggerSnackbar(text, duration);
    }
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
      <SnackbarWrapper
        in={open}
        mountOnEnter
        unmountOnExit
        onEnter={() => {
          clearTimeout(timeoutId);
          setTimeoutId(window.setTimeout(() => setOpen(false), duration));
        }}
        className={`KukauiSnackbarWrapper`}
        classNames={{
          enter: `snackbar-enter snackbar-enter-bottom-right`,
          enterActive: `snackbar-enter-active snackbar-enter-active-bottom-right`,
          exitActive: `snackbar-exit-active snackbar-exit-active-bottom-right`,
        }}
        timeout={150}
      >
        <SnackbarRoot className="KukuiSnackbar">
          <div className="KukuiSnackbarText">{text}</div>
          <button className="KukuiSnackbarClose" onClick={closeSnackbar}>
            <CloseIcon />
          </button>
        </SnackbarRoot>
      </SnackbarWrapper>
    </SnackbarContext.Provider>
  );
};

const CloseIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 12 12">
    <path
      fill="currentColor"
      d="M11.73 1.58L7.31 6l4.42 4.42-1.06 1.06-4.42-4.42-4.42 4.42-1.06-1.06L5.19 6 .77 1.58 1.83.52l4.42 4.42L10.67.52z"
      fillRule="evenodd"
    />
  </svg>
);

export default Snackbar;
