import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm-24-300.8L173.3 172c-11-7.3-25.9-4.3-33.3 6.7-7.3 11-4.3 25.9 6.7 32.4l96 64c7.4 5.8 16.8 6.2 24.6 2.1 7.8-5.1 12.7-12.3 12.7-22.1v-136c0-12.4-10.7-24-24-24s-24 11.6-24 24v92.1z" />
  </svg>
);

const SvgClockTenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockTenSolid;
