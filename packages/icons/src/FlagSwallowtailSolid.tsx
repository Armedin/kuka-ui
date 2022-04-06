import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 496c0 8.8-7.25 16-16 16H16c-8.75 0-16-7.2-16-16V32C0 14.25 14.25 0 32 0s32 14.25 32 32v464zm327.4-288L505.5 71.5c6.016-7.156 7.344-17.12 3.406-25.59S497.3 32 487.1 32H96v352h391.1c9.326 0 17.83-5.406 21.76-13.88s2.609-18.44-3.406-25.59L391.4 208z" />
  </svg>
);

const SvgFlagSwallowtailSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlagSwallowtailSolid;
