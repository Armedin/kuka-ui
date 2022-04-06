import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M64 224h192V96c0-17.67 14.3-32 32-32s32 14.33 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H64v128c0 17.7-14.33 32-32 32S0 433.7 0 416V96c0-17.67 14.33-32 32-32s32 14.33 32 32v128zM576 64c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H457.1l-17.7 88H524c64.1 0 116 51.9 116 116s-51.9 116-116 116h-67.6c-37.9 0-71.5-24.2-83.5-60.2l-3.3-9.7c-5.5-16.7 3.5-34.9 20.3-40.5 16.7-5.5 34.9 3.5 40.5 20.3l3.2 9.7c3.3 9.8 12.4 16.4 22.8 16.4H524c28.7 0 52-23.3 52-52s-23.3-52-52-52H400c-9.6 0-18.8-4.3-24.8-11.8-6.1-7.5-8.5-17.4-6.5-26.8l32-151.99C403.8 74.6 416.9 64 432 64h144z" />
  </svg>
);

const SvgH5Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH5Solid;
