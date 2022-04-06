import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 480c66.3 0 125.9-28.8 166.1-74.7 6.8-6.6 16-7.1 23.5-1.2 6.5 5 7.1 16 1.2 22.6C399.1 479 331.8 512 256 512 114.6 512 0 397.4 0 256S114.6 0 256 0c108.9 0 201.1 68.05 238.9 163.9 3.2 8.2-.9 17.5-9.1 20.7-8.3 3.2-17.5-.9-20.7-9.2C432.7 91.49 351.3 32 255.1 32c-122.8 0-224 100.3-224 224s101.2 224 224 224h.9zm16-208c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16v128zm-40 80c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm387.3-171.3c6.3 6.2 6.3 16.4 0 22.6l-128 128c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0z" />
  </svg>
);

const SvgCircleExclamationCheck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleExclamationCheck;
