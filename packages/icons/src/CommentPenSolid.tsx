import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 31.1C114.6 31.1.9 124.19.9 239.1c0 49.59 21.38 94.1 56.97 130.7-12.5 50.39-54.31 95.3-54.81 95.8-2.187 2.297-2.781 5.703-1.5 8.703 1.312 3 4.125 4.797 7.312 4.797 66.31 0 116-31.8 140.6-51.41 32.72 12.31 69.01 19.41 107.4 19.41 141.4 0 255.1-93.09 255.1-207.1S397.4 31.1 256 31.1zm-40.9 305.8a14 14 0 0 1-7.156 3.828l-55.55 11.11c-4.898.98-9.215-3.34-8.234-8.234l11.11-55.54a13.991 13.991 0 0 1 3.832-7.156l97.61-97.61 56 56.01L215.1 336.9zm144.7-144.7-24.48 24.48-56-56.01 24.48-24.48c10.94-10.93 28.66-10.93 39.6 0l16.41 16.41c10.89 11 10.89 28.7-.01 39.6z" />
  </svg>
);

const SvgCommentPenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentPenSolid;
