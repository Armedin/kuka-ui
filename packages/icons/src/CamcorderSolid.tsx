import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M525.6 165.8 416 241.3v157.5l109.6 75.48c21.2 14.42 50.4-.38 50.4-25.88V191.5c0-25.4-29.1-40.3-50.4-25.7zM320 159.1H96V128c0-17.6 14.4-32 32-32h160c17.7 0 32-14.33 32-32s-14.3-32-32-32H128c-53.02 0-96 42.98-96 96v34.88C12.88 169.5 0 187.5 0 207.8V416c0 35.35 28.65 63.1 64 63.1l256-.002c35.35 0 64-28.65 64-63.1V223.1c0-34.4-28.7-64-64-64zm-16 96H80c-8.836 0-16-7.164-16-15.1 0-8.838 7.164-16 16-16h224c8.838 0 16 7.162 16 16 0 8.8-7.2 15.1-16 15.1z" />
  </svg>
);

const SvgCamcorderSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCamcorderSolid;
