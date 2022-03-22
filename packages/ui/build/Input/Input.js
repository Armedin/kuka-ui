import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FieldWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &.has-label {\n    margin-top: 24px;\n  }\n\n  margin-bottom: 16px;\n  position: relative;\n  display: inline-block;\n  text-align: left;\n  width: 100%;\n"])));
var InputWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  border-radius: 8px;\n  width: 100%;\n  padding: 0 11px;\n  border-width: 1px;\n  background-color: #fff;\n  border: 1px solid var(--kukui-border);\n  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.035);\n  transition: all 0.2s ease;\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n  &.focused {\n    background-color: #fff;\n    box-shadow: rgb(218 218 219 / 30%) 0px 0px 0px 3px;\n  }\n"])));
var StyledInput = styled.input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  outline: none;\n  background: none;\n  border: none;\n  -webkit-appearance: none;\n  padding: 11px 0;\n  color: var(--kukui-text-default);\n  width: 100%;\n  &::placeholder {\n    opacity: 1;\n    color: #a5afbd;\n  }\n"])));
var LabelWrapper = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: -25px;\n"])));
var StyledLabel = styled.label(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  font-weight: 500;\n  color: var(--kukui-text-default);\n"])));
var Input = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var type = _ref.type,
      id = _ref.id,
      className = _ref.className,
      value = _ref.value,
      label = _ref.label,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange;

  var _useState = useState(false),
      focused = _useState[0],
      setFocused = _useState[1];

  var handleFocus = function handleFocus() {
    setFocused(true);
  };

  var handleBlur = function handleBlur() {
    setFocused(false);
  };

  return /*#__PURE__*/_jsxs(FieldWrapper, {
    className: label ? 'has-label' : "",
    children: [/*#__PURE__*/_jsx(InputWrapper, {
      className: focused ? 'focused' : "",
      children: /*#__PURE__*/_jsx(StyledInput, {
        ref: ref,
        className: className,
        value: value,
        id: id,
        type: type,
        placeholder: placeholder,
        onChange: onChange,
        onFocus: handleFocus,
        onBlur: handleBlur
      })
    }), label && /*#__PURE__*/_jsx(LabelWrapper, {
      children: /*#__PURE__*/_jsx(StyledLabel, {
        children: label
      })
    })]
  });
});
Input.displayName = 'Input';
Input.defaultProps = {
  type: 'text'
};
export default Input;