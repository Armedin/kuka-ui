import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M48 32C48 14.33 62.33 0 80 0s32 14.33 32 32v32h32V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32c0 1.54-.1 3.06-.3 4.54C254.1 82.21 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9 31.6 19.8 52.7 55 52.7 95.1 0 61.9-50.1 112-112 112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32v32c0 17.7-14.33 32-32 32s-32-14.3-32-32v-32h-6.26C18.69 448 0 429.3 0 406.3V101.6C0 80.82 16.82 64 37.57 64H48V32zm128 192c26.5 0 48-21.5 48-48s-21.5-48-48-48H64v96h112zM64 288v96h144c26.5 0 48-21.5 48-48s-21.5-48-48-48H64z" />
  </svg>
);

const SvgBitcoinSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBitcoinSignSolid;
