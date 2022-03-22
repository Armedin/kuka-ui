import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import styled from '@emotion/styled';
import { styledSx, extendSxProp } from '@kukui/system';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
};
var TypographyRoot = styled('span')({
  margin: 0
}, function (props) {
  return _extends({}, props.truncate && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, styledSx(props));
});
var Typography = /*#__PURE__*/React.forwardRef(function (inProps, ref) {
  var props = extendSxProp(_extends({}, inProps));

  var component = props.component,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["component", "variant"]);

  var Component = component || variantMapping[variant] || 'span';
  return /*#__PURE__*/_jsx(TypographyRoot, _extends({
    as: Component,
    ref: ref
  }, other));
});
Typography.displayName = 'Typography';
Typography.defaultProps = {
  variant: 'body1',
  sx: {}
};
export default Typography;