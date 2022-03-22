import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import deepmerge from 'deepmerge';
import callIfFn from '../callIfFn';

var styledSx = function styledSx(props) {
  var _ref = props || {},
      styles = _ref.sx,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme;

  if (!styles) {
    return null;
  }

  if (typeof styles === 'function') {
    return styles();
  }

  if (_typeof(styles) !== 'object') {
    return styles;
  }

  var css = {};
  Object.keys(styles).forEach(function (styleKey) {
    var value = callIfFn(styles[styleKey]);
    css = deepmerge(css, _defineProperty({}, styleKey, value));
  });
  return css;
};

export default styledSx;