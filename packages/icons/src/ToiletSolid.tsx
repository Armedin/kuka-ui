import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 48c8.8 0 16-7.25 16-16V16c0-8.75-7.2-16-16-16H16C7.25 0 0 7.25 0 16v16c0 8.75 7.25 16 16 16h16v158.7C11.82 221.2 0 237.1 0 256c0 60.98 33.28 115.2 84.1 150.4l-19.59 64.36C59.16 491.3 74.53 512 96.03 512h255.9c21.5 0 36.88-20.75 30.62-41.25L363 406.4c51.7-35.2 85-90.3 85-150.4 0-18.04-11.82-34.85-32-49.26V48h16zM96 72c0-4.37 3.63-8 8-8h48c4.4 0 8 3.63 8 8v16c0 4.38-3.6 8-8 8h-48c-4.37 0-8-3.62-8-8V72zm128 216c-88.4 0-160-14.3-160-32 0-17.67 71.63-32 160-32s160 14.33 160 32c0 17.7-71.6 32-160 32z" />
  </svg>
);

const SvgToiletSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToiletSolid;
