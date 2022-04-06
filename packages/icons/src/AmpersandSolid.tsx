import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m318 364.7 60.59-90.89c9.812-14.7 5.844-34.58-8.875-44.37-14.78-9.828-34.63-5.828-44.38 8.875l-52.19 78.28-71.88-77.08 51.72-40.08C275.3 181.4 288 154.7 288 126.2c0-51.91-42.22-94.14-94.13-94.14H142.1C90.22 32.01 48 74.25 48 126.2c0 27.14 10.09 53.13 28.62 73.42l30.06 32.25-65.37 50.63C15.06 303.7 0 335.2 0 368.9 0 430.15 49.84 480 111.1 480l70-.005c37.53 0 72.44-18.64 93.28-49.87l7.188-10.77 47.03 50.47C334.9 476.6 343.4 480 352 480c7.812 0 15.66-2.844 21.81-8.594 12.94-12.05 13.66-32.3 1.594-45.23L318 364.7zM142.1 96.01h51.75c16.65 0 30.15 13.49 30.15 30.19 0 9.156-4.094 17.7-10.69 23.05L157.5 192.5l-33.8-36.3c-7.6-8.3-11.7-18.9-11.7-30 0-16.7 13.5-30.19 30.1-30.19zm79 298.59c-8.938 13.39-23.88 21.39-39.94 21.39H111.1C85.13 416 64 394.9 64 368.9c0-14.28 6.375-27.64 17-36.22l69.53-53.88 86.16 92.44-15.59 23.36z" />
  </svg>
);

const SvgAmpersandSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAmpersandSolid;