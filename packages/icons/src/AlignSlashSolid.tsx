import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M98.4 51.82C103.2 40.19 114.6 32 128 32h384c17.7 0 32 14.33 32 32s-14.3 32-32 32H154.8l81.6 64H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H318.1l81.6 64H512c17.7 0 32 14.3 32 32s-14.3 32-32 32h-30.6l149.4 117.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L98.4 51.82zM128 352c-17.7 0-32-14.3-32-32.9 0-16.8 14.3-32 32-32h115.7l81.2 64.9H128zm0-128.9c-17.7 0-32-13.4-32-32 0-5.2 1.71-10.9 4.7-15.8l61.8 47.8H128zm0 256.9c-17.7 0-32-14.3-32-32s14.3-32 32-32h278.2l81.2 64H128z" />
  </svg>
);

const SvgAlignSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlignSlashSolid;
