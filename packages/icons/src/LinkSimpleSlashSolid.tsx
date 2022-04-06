import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M154.9 96.08c1.7-.05 3.4-.08 5.1-.08h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-19.6l81.7 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16.3l81.7 63.1c52.4.2 94.6-42.5 94.6-95.1 0-53.9-43-96-96-96h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c88.4 0 160 71.6 160 160 0 65.1-38.9 121.1-94.7 146.1l85.5 67c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L154.9 96.08zM.001 256c0-47.9 20.279-89.3 52.579-118.6l51.52 39.7C79.8 195.4 64 223.9 64 256c0 53 42.1 96 96 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96C71.64 416 .001 344.4.001 256z" />
  </svg>
);

const SvgLinkSimpleSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLinkSimpleSlashSolid;
