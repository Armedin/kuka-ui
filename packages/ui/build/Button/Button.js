import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import styled from '@emotion/styled';
import { shouldForwardProp as _shouldForwardProp } from '@kukui/system';
import { jsx as _jsx } from "react/jsx-runtime";
var IGNORED_PROPS = ['color'];
export var StyledButton = styled('button', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return _shouldForwardProp(prop) && !IGNORED_PROPS.includes(prop);
  }
})(function (props) {
  return _extends({
    padding: '0 13px',
    height: '36px',
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
    fontSize: '0.875rem',
    minWidth: '64px',
    borderRadius: '8px',
    border: 'none',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }, props.fullWidth && {
    width: '100%'
  }, props.color && {
    backgroundColor: "var(--kukui-".concat(props.color, ")"),
    color: '#fff'
  });
});
var Button = /*#__PURE__*/React.forwardRef(function (inProps, ref) {
  var children = inProps.children,
      className = inProps.className,
      disabled = inProps.disabled,
      other = _objectWithoutProperties(inProps, ["children", "className", "disabled"]);

  return /*#__PURE__*/_jsx(StyledButton, _extends({
    ref: ref,
    className: className,
    disabled: disabled
  }, other, {
    children: children
  }));
});
Button.displayName = 'Button';
export default Button;