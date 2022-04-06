import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M413.8 447.1 256 448v31.99c0 17.71-14.2 32.01-31.9 32.01-17.67 0-32.1-14.32-32.1-31.99v-31.99l-158.9-.01c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.003l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31H348.2l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z" />
  </svg>
);

const SvgTreeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTreeSolid;
