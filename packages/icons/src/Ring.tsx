import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 64C87.88 64 0 128.4 0 192v114.1C0 384.5 114.6 448 256 448s256-63.5 256-141.9V192c0-63.6-87.9-128-256-128zm224 242.1c0 52-92 109.9-224 109.9S32 358.12 32 306.1V256c39.38 36.63 114.5 64 224 64s184.6-27.38 224-64v50.1zM89.38 256C130.2 236.4 189.8 224 256 224s125.8 12.38 166.6 32c-41 19.6-100.4 32-166.6 32s-125.6-12.4-166.62-32zm364.92-19.4C411.2 210.2 345 192 256 192s-155.2 18.2-198.25 44.6C41.38 223.4 32 208.1 32 192c0-53 100.2-96 224-96s224 43 224 96c0 16.1-9.4 31.4-25.7 44.6z" />
  </svg>
);

const SvgRing = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRing;
