import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m503.1 273.6-112 104c-6.984 6.484-17.17 8.219-25.92 4.406s-14.41-12.45-14.41-22v-56l-192 .001V360a23.99 23.99 0 0 1-14.41 22c-8.75 3.812-18.94 2.078-25.92-4.406l-112-104c-9.781-9.094-9.781-26.09 0-35.19l112-104a24.014 24.014 0 0 1 25.92-4.406C154 133.8 159.7 142.5 159.7 152v55.1l192-.001v-56c0-9.547 5.656-18.19 14.41-22s18.94-2.078 25.92 4.406l112 104c9.77 9.995 9.77 26.995-.93 36.095z" />
  </svg>
);

const SvgLeftRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeftRightSolid;