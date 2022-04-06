import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M506.5 202.1 480 229.5l-18.7-18.8c-25-24.9-65.6-24.9-90.6 0-24.9 25-24.9 65.6 0 90.6l64 64c12 11.9 27.4 18.1 43.1 17.8C433.5 460.5 350.8 512 256 512 114.6 512 0 397.4 0 256S114.6 0 256 0c123.2 0 226.1 87.04 250.5 202.1zM280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152zm-24 232c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm243.8-44.2c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6l-128 128z" />
  </svg>
);

const SvgCircleExclamationCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleExclamationCheckSolid;
