import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M578.2 66.06a898.352 898.352 0 0 1-516.4 0C31 56.82 0 79.88 0 112v319.9c0 32.15 30.1 55.21 61.79 45.97 168.4-50.53 347.1-50.53 516.4-.002C608.1 487.2 640 464.1 640 431.1V112c0-32.12-31-55.18-61.8-45.94zM128 224c-17.7 0-32-14.3-32-32s14.33-32 32-32c17.68 0 32 14.33 32 32s-14.3 32-32 32zm346.3 164.6C423.4 380.3 371.8 376 320 376c-50.45 0-100.7 4.043-150.3 11.93-14.14 2.246-24.11-13.19-15.78-24.84l49.18-68.56c3-4.13 7.8-6.53 12.9-6.53s9.916 2.441 12.93 6.574l32.46 44.51 93.3-139.1C357.7 194.7 362.7 192 368 192s10.35 2.672 13.31 7.125l109.1 165.1C498.1 375.9 488.1 390.8 474.3 388.6z" />
  </svg>
);

const SvgPanoramaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPanoramaSolid;
