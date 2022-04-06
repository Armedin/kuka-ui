import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M223.1 64c0 35.35-27.8 64-64 64-34.4 0-64-28.65-64-64s29.6-64 64-64c36.2 0 64 28.65 64 64zM70.2 400c-10.92 0-18.63-10.7-15.18-21.1l31.14-93.4-28.66 37.8c-10.68 14.1-30.75 16.9-44.83 6.2-14.085-10.7-16.845-30.8-6.167-44.8L65.4 206.1C87.84 177.4 122.9 160 160 160c37.2 0 72.2 17.4 94.6 46.1l58.9 78.6c10.7 14 7.9 34.1-6.2 44.8-14 10.7-34.1 7.9-44.8-6.2l-28.6-37.7 30.2 93.3c4.3 10.4-3.4 21.1-14.3 21.1H232v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80H70.2z" />
  </svg>
);

const SvgChildDressSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChildDressSolid;
