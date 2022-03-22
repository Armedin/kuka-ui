import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from '@emotion/styled';
import { jsx as _jsx } from "react/jsx-runtime";
var SIconButton = styled('button')({
  padding: '8px',
  height: '36px',
  width: '36px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  outline: 0,
  cursor: 'pointer',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none',
  color: 'inherit',
  fontFamily: 'inherit',
  fontWeight: 500,
  fontSize: '1rem',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
});
var IconButton = /*#__PURE__*/React.forwardRef(function (inProps, ref) {
  var children = inProps.children,
      other = _objectWithoutProperties(inProps, ["children"]);

  return /*#__PURE__*/_jsx(SIconButton, _extends({}, other, {
    children: children
  }));
});
IconButton.displayName = 'IconButton';
export default IconButton;