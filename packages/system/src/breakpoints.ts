export const values = {
  xs: 0, // phone
  sm: 600, // tablet
  md: 900, // small laptop
  lg: 1200, // desktop
  xl: 1536, // large screen
};

const defaultBreakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values,
  up: (key: any) => `@media (min-width:${values[key]}px)`,
  down: (key: any) => `@media (max-width:${values[key] - 0.05}px)`,
};

const breakpoints = defaultBreakpoints;

export default breakpoints;
