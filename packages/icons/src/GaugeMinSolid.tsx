import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 64c-17.7 0-32 14.33-32 32 0 17.7 14.3 32 32 32s32-14.3 32-32c0-17.67-14.3-32-32-32zm0 352c35.3 0 64-28.7 64-64s-28.7-64-64-64c-14.1 0-27.2 4.6-37.8 12.4l-117.6-72.8c-11.24-7-26.03-3.5-33.01 7.8-6.97 11.2-3.49 26 7.78 33l117.53 72.8c-.6 3.5-.9 7.1-.9 10.8 0 35.3 28.7 64 64 64zM144 112c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm272 176c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-48-176c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgGaugeMinSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeMinSolid;
