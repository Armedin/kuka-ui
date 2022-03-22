import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { styledSx, extendSxProp, breakpoints } from '@kukui/system';
import styled from '@emotion/styled';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var ContainerRoot = styled('span')({
  width: '100%',
  marginLeft: 'auto',
  boxSizing: 'border-box',
  marginRight: 'auto',
  display: 'block'
}, function (props) {
  return _extends({}, styledSx(props), props.maxWidth !== 'xs' && _defineProperty({}, breakpoints.up(props.maxWidth), {
    maxWidth: "".concat(breakpoints.values[props.maxWidth], "px")
  }), !props.disableGutters && _defineProperty({
    paddingLeft: '1rem',
    paddingRight: '1rem'
  }, breakpoints.up('sm'), {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
  }));
});
var Container = /*#__PURE__*/React.forwardRef(function (inProps, ref) {
  var props = extendSxProp(_extends({}, inProps));

  var component = props.component,
      other = _objectWithoutProperties(props, ["component"]);

  return /*#__PURE__*/_jsx(ContainerRoot, _extends({
    as: component,
    ref: ref
  }, other));
});
Container.displayName = 'Container';
Container.defaultProps = {
  component: 'div',
  maxWidth: 'lg',
  sx: {}
};
export default Container;