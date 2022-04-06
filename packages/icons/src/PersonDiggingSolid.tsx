import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M272 95.93c26.5 0 47.99-21.47 47.99-47.97S298.5 0 272 0c-26.5 0-48 21.47-48 47.97s21.5 47.96 48 47.96zM209.7 357.3c-25.75-17.25-52.25-33.24-79.5-48.11L58.62 270.2 1.246 471.1c-4.875 16.1 4.1 34.74 22 39.62s34.63-4.998 39.5-21.99l36.63-128.1 60.63 40.37v78.86c0 17.62 14.38 31.99 32 31.99s32-14.37 32-31.99l.002-95.93A32.002 32.002 0 0 0 209.7 357.3zM311.1 416c-13.88 0-25.95 8.863-30.33 21.86l-24.75 74.07h319.9l-101.9-206.3c-11.38-22.49-43.1-23.63-56.1-2.01l-31.89 54.21-65.26-35.64-24-121.2c-8.67-39.69-33.57-73.29-69.67-91.29-1-.5-2.125-.625-3.125-1.125-2.25-1.125-4.752-1.1-7.252-2.625-15.223-6.1-31.523-9.97-48.023-9.97H95.1c-9.25 0-18.05 4.061-24.18 10.93l-55.95 63.92c-.75 1-1.5 2.124-2.25 3.249-8.875 13.1-3 32.87 11.63 40.74l336.6 184.3-9.837 16.87H311.1zM105.9 204.1l-23.5-12.87 28.13-32.12h34.38L105.9 204.1zm93.6 52 34.9-41.28 13.5 67.61-48.4-26.33z" />
  </svg>
);

const SvgPersonDiggingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonDiggingSolid;