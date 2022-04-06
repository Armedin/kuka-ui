import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 31.1C114.6 31.1.9 124.19.9 239.1c0 49.59 21.38 94.1 56.97 130.7-12.5 50.39-54.31 95.3-54.81 95.8-2.187 2.297-2.781 5.703-1.5 8.703 1.312 3 4.125 4.797 7.312 4.797 66.31 0 116-31.8 140.6-51.41 32.72 12.31 69.01 19.41 107.4 19.41 141.4 0 255.1-93.09 255.1-207.1S397.4 31.1 256 31.1zM232 136c0-13.2 10.8-24 24-24s24 10.75 24 24v112c0 13.25-10.75 24-24 24s-24-10.7-24-24V136zm24 232c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32c0 17.7-14.3 32-32 32z" />
  </svg>
);

const SvgCommentExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentExclamationSolid;
