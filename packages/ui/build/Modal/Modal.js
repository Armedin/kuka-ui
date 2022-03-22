import _extends from "@babel/runtime/helpers/esm/extends";

var _i;

import React from 'react';
import { Transition } from 'react-transition-group';
import styled from '@emotion/styled';
import { IconButton } from '@kukui/ui';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var duration = 400;
var defaultStyle = {
  transition: "transform ".concat(duration, "ms cubic-bezier(0.25, 0.8, 0.25, 1) 0ms, opacity ").concat(duration, "ms cubic-bezier(0.25, 0.8, 0.25, 1) 0ms"),
  opacity: 0
};
var transitionStyles = {
  entering: {
    transform: 'scale(0.5)',
    opacity: 0
  },
  entered: {
    transform: 'scale(1)',
    opacity: 1
  },
  exiting: {
    transform: 'scale(1)',
    opacity: 1
  },
  exited: {
    transform: 'scale(0.5)',
    opacity: 0
  }
};
var overlayTransition = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 1
  },
  exited: {
    opacity: 0
  }
};
var OverlayBackdrop = styled('div')({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  background: 'rgba(0,0,0,.32)',
  opacity: 0
});
var Container = styled('div')({
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
  zIndex: 1000
});
var ModalBody = styled('div')({
  background: '#fff',
  boxShadow: '0 11px 15px -7px #0003, 0 24px 38px 3px #00000024, 0 9px 46px 8px #0000001f',
  maxWidth: '80%',
  maxHeight: '80%',
  overflow: 'auto',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  width: '640px'
});
var CloseButtonContainer = styled('div')({
  paddingRight: '.75rem',
  paddingTop: '.75rem',
  position: 'absolute',
  top: 0,
  right: 0
});
var CloseButton = styled(IconButton)({
  background: 'transparent',
  color: 'var(--text-secondary)',
  '&:hover': {
    backgroundColor: 'var(--color-gray-100)'
  },
  i: {
    fontSize: '1.35rem'
  }
});
var Content = styled('div')({
  padding: '1.5rem'
});

var Modal = function Modal(_ref) {
  var _ModalBody;

  var open = _ref.open,
      _children = _ref.children,
      onClose = _ref.onClose;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Transition, {
      "in": open,
      timeout: duration,
      mountOnEnter: true,
      unmountOnExit: true,
      children: function children(state) {
        return /*#__PURE__*/_jsx(OverlayBackdrop, {
          style: _extends({}, defaultStyle, overlayTransition[state])
        });
      }
    }), /*#__PURE__*/_jsx(Transition, {
      "in": open,
      timeout: duration,
      mountOnEnter: true,
      unmountOnExit: true,
      children: function children(state) {
        return /*#__PURE__*/_jsx(Container, {
          style: _extends({}, defaultStyle, transitionStyles[state]),
          children: _ModalBody || (_ModalBody = /*#__PURE__*/_jsxs(ModalBody, {
            children: [/*#__PURE__*/_jsx(CloseButtonContainer, {
              children: /*#__PURE__*/_jsx(CloseButton, {
                onClick: onClose,
                children: _i || (_i = /*#__PURE__*/_jsx("i", {
                  className: "fal fa-times"
                }))
              })
            }), /*#__PURE__*/_jsx(Content, {
              children: _children
            })]
          }))
        });
      }
    })]
  });
};

export default Modal;