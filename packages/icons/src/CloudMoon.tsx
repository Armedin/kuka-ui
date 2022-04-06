import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M351.5 313.6c-4.5-41.3-39.6-73.6-82.1-73.6-13.87 0-27.24 3.5-39.49 10.25C211.7 233.5 188.1 224 163.2 224c-53.74 0-97.46 42.56-99.21 96.06C25.75 334.31 0 370.87 0 412.87.125 467.5 44.61 512 99.35 512h249.4c54.73 0 99.22-44.5 99.22-99.25C447.1 359 405 315.1 351.5 313.6zM348.8 480H102.7c-36.29 0-67.88-27.72-69.59-63.97-2.47-32.93 19.43-61.53 51.37-68.63 8.746-3.671 13.15-12.1 11.1-20.5-.125-1.125-.375-2.5-.375-3.75 0-37.13 30.12-67.25 67.23-67.25 19.99 0 38.99 9.25 51.98 25.25C220.8 288 230.9 289.1 237.7 283.5c15.27-12.38 35.36-15.27 53.99-6.324 15.92 7.649 26.03 23.85 27.98 41.41.54 4.873.397 4.374-.43 10.37-.454 3.867 1.645 20.56 19.63 17.58 3.813-.632 7.667-1.152 11.53-1.064 36.4.825 65.69 30.75 65.69 67.23C416.1 449.8 385.9 480 348.8 480zm224.8-192.7c-4.125-8.625-12.38-14-21.88-14-1.5 0-3 .125-4.5.5-7.75 1.5-15.5 2.125-23.25 2.125-66.1 0-121.5-54.63-121.5-121.9 0-43.75 23.62-84.25 61.62-106 8.875-5.125 13.62-15 11.88-25.12s-9.375-17.88-19.5-19.75C444.1 1.125 433.2 0 421.5 0 315.8 0 229.8 86.13 229.8 192c0 6.5.375 12.75 1 19.25 1.957.441 3.75 1.242 5.664 1.781C244.1 210.4 253.9 209 262.9 208.5c-.7-5.4-1.2-10.8-1.2-16.4 0-88.25 71.62-160 159.7-160 3 0 5.875.125 8.875.125-37.37 29-59.87 74-59.87 122 0 84.75 68.87 153.8 153.5 153.8 2.625 0 5.25-.125 7.75-.25-19.63 18.88-43.79 31.62-69.84 38.43 5.447 9.289 9.502 19.41 12.54 30 37.33-10.69 70.89-32.35 96.05-63.43C576.5 305.6 577.7 295.8 573.6 287.3z" />
  </svg>
);

const SvgCloudMoon = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudMoon;
