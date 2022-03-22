import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { SvgIcon } from '@kukui/ui';
import { jsx as _jsx } from "react/jsx-runtime";
export default function createSvgIcon(path, viewBox) {
  var Component = function Component(inProps, ref) {
    return /*#__PURE__*/_jsx(SvgIcon, _extends({
      ref: ref,
      viewBox: viewBox
    }, inProps, {
      children: path
    }));
  };

  return /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Component));
}