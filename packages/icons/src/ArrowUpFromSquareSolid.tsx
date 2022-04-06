import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M167.8 159.7c8.895 0 17.63-3.71 23.76-10.39L224 113.9V320c0 17.7 14.33 32.02 32 32.02s32-14.32 32-32.02V113.9l32.4 35.39c6.32 6.879 14.96 10.38 23.63 10.38 17.64 0 31.97-14.29 31.97-32.01 0-7.734-2.78-15.51-8.409-21.66l-87.1-96.09C273.5 3.312 264.8 0 256 0s-17.5 3.312-23.6 9.945l-87.1 96.09c-5.629 6.152-8.409 13.93-8.409 21.66C135.1 145.4 150.3 159.7 167.8 159.7zM448 96h-32v63.92l32 .08v288H64V160l32-.082V96H64c-35.28 0-64 28.7-64 64v288c0 35.28 28.72 64 64 64h384c35.28 0 64-28.72 64-64V160c0-35.3-28.7-64-64-64z" />
  </svg>
);

const SvgArrowUpFromSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpFromSquareSolid;
