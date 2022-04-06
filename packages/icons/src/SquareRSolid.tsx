import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-60.6 313.9c7.812 10.72 5.438 25.72-5.281 33.52C313.8 382.5 308.9 384 304 384c-7.438 0-14.75-3.422-19.44-9.891L221.1 288H176v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.2 10.8-24 24-24h104c44.13 0 80 35.89 80 80 0 36.2-24.31 66.5-57.36 76.34l44.76 61.56zM256 176h-80v64h80c17.66 0 32-14.36 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgSquareRSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareRSolid;
