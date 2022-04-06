import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M32 240h256V80c0-8.84 7.2-16 16-16s16 7.16 16 16v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V272H32v160c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V80c0-8.84 7.164-16 16-16 8.84 0 16 7.16 16 16v160zM576 64c8.8 0 16 7.16 16 16s-7.2 16-16 16H445.1l-25.6 128H528c61.9 0 112 50.1 112 112s-50.1 112-112 112h-71.6c-31 0-58.5-19.8-68.3-49.2l-3.3-9.7c-2.8-8.4 1.8-17.5 10.1-20.3 8.4-2.8 17.5 1.8 20.3 10.1l3.2 9.7c5.5 15.5 20.7 27.4 38 27.4H528c44.2 0 80-35.8 80-80s-35.8-80-80-80H400c-4.8 0-9.3-2.1-12.4-5.9-3-3.7-4.2-8.5-3.3-13.2l32-160.04C417.8 69.38 424.4 64 432 64h144z" />
  </svg>
);

const SvgH5 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH5;
