import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 448c8.8 0 16 7.2 16 16s-7.2 16-16 16H272v-.1c-1.1-.8-2.2.1-3.3.1H147.3c-14.8 0-29.1-5.9-39.6-16.4l-87.98-88c-21.874-21.9-21.874-57.3 0-79.2L264.4 51.72c21.9-21.87 57.3-21.87 79.2 0L492.3 200.4c21.9 21.9 21.9 57.3 0 79.2L323.9 448H496zM320.1 74.34c-8.5-9.37-23.7-9.37-33.1 0L175.1 185.4 358.6 368l111.1-111.9c9.3-8.5 9.3-23.7 0-33.1L320.1 74.34zM42.34 352.1l87.96 88c4.5 5.4 10.6 7.9 17 7.9h121.4c6.4 0 12.5-2.5 17-7.9l50.3-49.5-182.6-183.5L42.34 319c-9.37 9.4-9.37 24.6 0 33.1zM292.7 448l-7-7.9z" />
  </svg>
);

const SvgEraser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEraser;
