import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M287.1 288c-7.9 0-15.1 7.2-15.1 16v144c0 17.66-14.34 32-32 32s-32-14.34-32-32v-16c0-8.844-7.159-16-16-16s-16 7.2-16 16v16c0 35.28 28.72 64 63.1 64s64.9-28.7 64.9-64V304c0-8.8-7.2-16-16.9-16zm288.6-7.1C545.8 138.1 424.8 55.65 304 48.9V16c0-8.844-7.158-15.1-16-15.1S272 7.156 272 16v32.86C177.4 54.79 36.01 114 .295 280.9c-1.611 7.3 3.592 15.2 10.455 15.2 2.598 0 5.432-1.126 8.229-3.845 22.38-23.67 45.45-36.68 68.52-36.68 30.54 0 61.08 22.77 90.08 73.68 2.592 4.637 6.203 6.794 9.781 6.794 3.756 0 7.473-2.378 9.938-6.794C217.5 293.9 242.2 256 287.1 256c58.5 0 88.19 68.82 90.69 73.2 2.465 4.416 6.184 6.794 9.938 6.794 3.578 0 7.189-2.157 9.781-6.794 28.1-50.89 59.65-73.46 90.16-73.46 23.15 0 46.23 12.1 68.45 36.46 2.834 2.748 5.689 3.886 8.295 3.886C572.2 296.1 577.3 288.2 575.7 280.9zm-87.1-57.1c-36.38.006-69.6 20.26-99.13 60.42-27.12-39.05-62.33-60.16-101.4-60.16-49.75 0-80.84 31.56-100.1 60.76C157.4 244.1 124 223.6 87.5 223.6c-12.7 0-25.29 2.537-37.63 7.52 50.85-113.3 164.6-148.6 231.3-150.8 1.109-.035 12.61.002 13.84.035 85.1 2.346 185.3 50.68 231 150.9-12.31-4.955-24.81-7.455-37.41-7.455z" />
  </svg>
);

const SvgUmbrella = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUmbrella;
