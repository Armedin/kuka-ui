import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 31.1C114.6 31.1.9 124.19.9 239.1c0 49.59 21.37 94.1 56.96 130.7-12.5 50.39-54.31 95.3-54.81 95.8-2.187 2.297-2.781 5.703-1.5 8.703 1.312 3 4.125 4.797 7.312 4.797 66.31 0 116-31.8 140.6-51.41 32.72 12.31 69.01 19.41 107.4 19.41 141.4 0 255.1-93.09 255.1-207.1S397.4 31.1 256 31.1zm95.1 256c0 17.62-21.5 32-48 32s-48-14.38-48-32 21.5-32 48-32c5.375 0 10.75.746 16 1.996V181.6l-96 37.5v100c0 17.62-21.5 32-47.1 32s-48-14.38-48-32 21.5-32 48-32c5.375 0 10.75.746 16 1.996V175.2c0-7 4.5-13.12 11.25-15.25l128-47.25c4.75-1.5 10.15-.6 14.25 2.4s6.5 7.7 6.5 12l-.9 160z" />
  </svg>
);

const SvgCommentMusicSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentMusicSolid;
