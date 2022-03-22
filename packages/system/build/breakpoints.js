export var values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen

};
var defaultBreakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: values,
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  },
  down: function down(key) {
    return "@media (max-width:".concat(values[key] - 0.05, "px)");
  }
};
var breakpoints = defaultBreakpoints;
export default breakpoints;