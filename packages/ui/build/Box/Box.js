import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import styled from '@emotion/styled';
import { styledSx } from '@kukui/system';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var BoxRoot = styled('div')(styledSx);
var Box = /*#__PURE__*/React.forwardRef(function (inProps, ref) {
  var component = inProps.component,
      other = _objectWithoutProperties(inProps, ["component"]);

  return /*#__PURE__*/_jsx(BoxRoot, _extends({
    as: component
  }, other, {
    ref: ref
  }));
});
Box.displayName = 'Box';
Box.defaultProps = {
  component: 'div',
  sx: {}
};
export default Box;