import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M.146 184.4C-2.165 244.2 23.01 298 63.99 334.9V512h160l.01-195.5L3.674 156.2C1.871 165.4.519 174.8.147 184.4zM336 368h160l16-48H256.9l.018 192h145.9c27.55 0 52-17.63 60.71-43.76L464 464H336.9c-8.836 0-16-7.164-16-16 0-8.838 7.164-16 16-16h138.7l10.67-32h-149.3c-8.836 0-16-7.164-16-16-.97-8.8 6.23-16 15.03-16zm173.2-93c-20.1-47.13-48.49-151.8-73.11-186.8C397.6 33.63 334.5 0 266.1 0H200C117.1 0 42.48 50.57 13.25 123.7L239.2 288h272.6c0-4.3-.7-8.7-2.6-13zM352 224c-17.62 0-32-14.38-32-32s14.38-32 32-32c17.62 0 31.1 14.38 31.1 32s-13.5 32-31.1 32z" />
  </svg>
);

const SvgHeadSideMaskSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeadSideMaskSolid;
