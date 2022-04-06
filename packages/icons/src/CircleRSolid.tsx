import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm99.4 345.9c7.812 10.72 5.438 25.72-5.281 33.52C345.8 382.5 340.9 384 336 384c-7.438 0-14.75-3.422-19.44-9.891L253.1 288H208v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.2 10.8-24 24-24h104c44.13 0 80 35.89 80 80 0 36.2-24.31 66.5-57.36 76.34l44.76 61.56zM288 176h-80v64h80c17.66 0 32-14.36 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgCircleRSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleRSolid;
