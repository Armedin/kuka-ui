import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M155.3 139.3 240 54.63V304c0 8.8 7.2 16 16 16s16-7.156 16-16V54.63l84.69 84.69c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62l-112-112C264.2 1.562 260.1 0 256 0s-8.2 1.562-11.3 4.688l-112 112c-6.25 6.25-6.25 16.38 0 22.62s16.4 6.292 22.6-.008zM464 320h-80c-6.061 0-11.6 3.424-14.31 8.844L342.1 384H169.9l-27.58-55.15A15.932 15.932 0 0 0 128 320H48c-26.51 0-48 21.5-48 48v96c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-96c0-26.5-21.5-48-48-48zm16 144c0 8.836-7.162 16-16 16H48c-8.84 0-16-7.2-16-16v-96c0-8.8 7.16-16 16-16h70.11l27.58 55.16c2.71 5.44 8.21 8.84 13.41 8.84H352c6.062 0 11.6-3.424 14.31-8.846L393.9 352H464c8.838 0 16 7.164 16 16v96z" />
  </svg>
);

const SvgInboxOut = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInboxOut;
