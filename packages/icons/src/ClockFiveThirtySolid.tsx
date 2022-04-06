import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 335.3 20 30c7.4 11 22.3 14 33.3 5.8 11-6.5 14-21.4 5.8-32.4l-64-96c-5-8.8-15.9-13.6-26.1-9.7-10.1 3.1-17.9 12.4-17.9 23v136c0 13.3 11.6 24 24 24 14.2 0 24.9-10.7 24.9-24v-56.7z" />
  </svg>
);

const SvgClockFiveThirtySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockFiveThirtySolid;
