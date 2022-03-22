import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import styled from '@emotion/styled';
import React from 'react';
import { styledSx, extendSxProp } from '@kukui/system';
import { jsx as _jsx } from "react/jsx-runtime";
var SvgIconRoot = styled('svg')({
  width: '1em',
  height: '1em',
  display: 'inline-block',
  flexShrink: 0,
  fill: 'currentColor',
  userSelect: 'none'
}, function (props) {
  return _extends({}, styledSx(props), props.fontSize && {
    fontSize: {
      sm: '20px',
      md: '24px',
      lg: '35px'
    }[props.fontSize]
  });
});
var SvgIcon = /*#__PURE__*/React.forwardRef(function (inProps, ref) {
  var props = extendSxProp(_extends({}, inProps));

  var component = props.component,
      viewBox = props.viewBox,
      other = _objectWithoutProperties(props, ["component", "viewBox"]);

  return /*#__PURE__*/_jsx(SvgIconRoot, _extends({
    as: component,
    focusable: "false",
    viewBox: viewBox,
    "aria-hidden": true,
    role: "img",
    ref: ref
  }, other));
});
SvgIcon.defaultProps = {
  component: 'svg',
  viewBox: '0 0 320 512',
  fontSize: 'md',
  sx: {}
};
SvgIcon.displayName = 'SvgIcon';
export default SvgIcon;