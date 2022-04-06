import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm-24-335.3-20.9-30c-6.5-11-21.4-14-32.4-6.7-11 7.4-14 22.3-6.7 33.3l64 96c5.9 8.8 16.8 12.7 26.1 8.8 11-2.2 17.9-11.5 17.9-22.1V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v56.7z" />
  </svg>
);

const SvgClockElevenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockElevenSolid;
