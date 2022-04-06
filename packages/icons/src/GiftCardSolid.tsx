import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M389.8 0h2.2c48.6 0 88 39.4 88 88 0 14.4-3.5 27.1-9.6 40H512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h41.6c-6.14-12.9-9.6-25.6-9.6-40 0-48.6 39.4-88 88-88h2.2c31.9 0 61.5 16.91 77.7 44.45L288 85.46l24.1-41.01C328.3 16.91 357.9 0 389.8 0zm-71.1 128H392c22.1 0 40-17.9 40-40 0-22.09-17.9-40-40-40h-2.2c-14.9 0-28.7 7.91-36.3 20.78L318.7 128zM186.2 48H184c-22.1 0-40 17.91-40 40 0 22.1 17.9 40 40 40h73.3l-34.8-59.22C214.9 55.91 201.1 48 186.2 48zM64 384v64h448v-64H64zm448-64V192H345.9l40.5 48.6c8.5 10.2 7.1 24.5-3 33.8-10.2 8.5-25.4 7.1-33.8-3L288 197.5l-61.6 73.9c-9.3 10.1-23.6 11.5-33.8 3-10.1-9.3-11.5-23.6-3-33.8l40.5-48.6H64v128h448z" />
  </svg>
);

const SvgGiftCardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGiftCardSolid;