import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 64c-17.7 0-32 14.33-32 32 0 17.7 14.3 32 32 32s32-14.3 32-32c0-17.67-14.3-32-32-32zm0 352c35.3 0 64-28.7 64-64 0-3.7-.3-7.3-.9-10.8l117.5-72.8c11.3-7 14.8-21.8 7.8-33-7-11.3-21.8-14.8-33-7.8l-117.6 72.8c-10.6-7.8-23.7-12.4-37.8-12.4-35.3 0-64 28.7-64 64s28.7 64 64 64zM144 112c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM96 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32zm272-176c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgGaugeMaxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeMaxSolid;
