import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M373.2 16.97c21.9-21.867 57.3-21.867 79.2 0L495 59.6c21.9 21.87 21.9 57.3 0 79.2L182.3 451.6a97.59 97.59 0 0 1-40.8 24.2L20.52 511.4c-5.62 1.6-11.693.1-15.833-4.1-4.14-4.1-5.689-10.2-4.036-15.8l35.579-121c4.53-15.4 12.86-29.4 24.21-40.8L373.2 16.97zm56.6 22.63c-9.4-9.37-24.6-9.37-34 0L341 94.4l76.6 75.7 54.8-53.9c9.4-9.4 9.4-24.6 0-33.97L429.8 39.6zm-362.87 340-27.3 92.8 92.77-27.3c10.3-3 19.7-8.6 27.2-16.2l234.5-235.3-75.7-76.6L83.07 352.4c-7.57 7.5-13.12 16.9-16.14 27.2zM560 480c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h320z" />
  </svg>
);

const SvgPenLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenLine;
