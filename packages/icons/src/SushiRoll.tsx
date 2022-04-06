import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 352c0 45.2-35.8 77.4-73.9 96.5C334 468.5 280.9 480 224 480c-56.9 0-110.9-11.5-150.08-31.5C35.78 429.4 0 397.2 0 352V136c0-22.4 12.21-39.87 25.86-51.97 13.69-12.14 31.67-21.6 50.24-28.9C116.2 40.43 168.2 32 223.1 32c56.7 0 108.7 8.43 147.9 23.13 19.5 7.3 37.5 16.76 51.1 28.9C435.8 96.13 448 113.6 448 136v216zm-32-216c0-37.74-77.4-68.7-176-71.75.2 52.85 54.4 111.65 143.7 110.85 20.4-10.5 32.3-24.3 32.3-39.1zM78.01 182.8c20.82-26.5 48.49-45.7 75.19-59.1 21.5-10.8 42.9-18.1 60.8-23.6-3.9-10.99-6-23.34-6-35.85C109.4 67.3 32 98.26 32 136c0 17.9 17.32 34.2 46.01 46.8zm32.39 11.3c31.8 8.7 71.1 13.9 113.6 13.9 35 0 67.8-3.5 96.1-9.6-40.6-12.9-72.7-37.6-92-67.9-16.7 3.8-38.6 10.8-60.5 21.8-20.9 10.5-41.1 24.2-57.2 41.8zM32 352c0 53 85.1 96 192 96 106 0 192-43 192-96V193c-12.7 9.8-28.3 17.6-45 23.9-39.2 14.7-91.2 23.1-147 23.1s-107.8-8.4-147.9-23.1C60.32 210.6 44.73 202.8 32 193v159z" />
  </svg>
);

const SvgSushiRoll = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSushiRoll;