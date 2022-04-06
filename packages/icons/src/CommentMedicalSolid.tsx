import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 31.1C114.6 31.1.9 124.19.9 239.1c0 49.59 21.38 94.1 56.97 130.7-12.5 50.39-54.31 95.3-54.81 95.8-3.06 3.2-3.654 6.6-2.373 9.6 1.313 3 4.125 4.797 7.313 4.797 66.31 0 116-31.8 140.6-51.41 32.72 12.31 69.01 19.41 107.4 19.41C397.4 447.1 512 354.9 512 239.1s-114.6-208-256-208zM368 266c0 8.836-7.164 16-16 16h-54v54c0 8.836-7.164 16-16 16h-52c-8.836 0-16-7.164-16-16v-54h-54c-8.836 0-16-7.164-16-16v-52c0-8.838 7.164-16 16-16h53.1v-54c0-8.838 7.164-16 16-16h52c8.836 0 16 7.162 16 16v54H352c8.836 0 16 7.162 16 16v52z" />
  </svg>
);

const SvgCommentMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentMedicalSolid;
