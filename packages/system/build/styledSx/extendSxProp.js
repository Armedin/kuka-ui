import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var splitProps = function splitProps(props) {
  var result = {
    otherProps: {}
  };
  Object.keys(props).forEach(function (prop) {
    result.otherProps[prop] = props[prop];
  });
  return result;
};

export default function extendSxProp(props) {
  var inSx = props.sx,
      other = _objectWithoutProperties(props, ["sx"]);

  var _splitProps = splitProps(other),
      otherProps = _splitProps.otherProps;

  return _extends({}, otherProps, {
    sx: _extends({}, inSx)
  });
}