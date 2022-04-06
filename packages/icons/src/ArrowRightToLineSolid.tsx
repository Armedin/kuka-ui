import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m137.4 150.6 73.4 73.4H32c-17.69 0-32 14.3-32 32s14.31 32 32 32h178.8l-73.38 73.38C131.1 367.6 128 375.8 128 384s3.125 16.38 9.375 22.62c12.5 12.5 32.75 12.5 45.25 0l128-128c12.5-12.5 12.5-32.75 0-45.25l-128-128c-12.5-12.5-32.75-12.5-45.25 0s-12.475 32.73.025 45.23zM384 96v320c0 17.69 14.31 32 32 32s32-14.31 32-32V96c0-17.69-14.31-32-32-32s-32 14.31-32 32z" />
  </svg>
);

const SvgArrowRightToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightToLineSolid;
