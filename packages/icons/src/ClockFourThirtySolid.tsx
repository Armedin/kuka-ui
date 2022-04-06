import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 300.8 58.7 38.3c11 8.2 25.9 5.2 32.4-5.8 8.2-11 5.2-25.9-5.8-33.3l-96-64c-7.4-4.9-16.8-5.3-24.6-1.2-7.8 4.2-13.6 12.3-13.6 21.2v136c0 13.3 11.6 24 24 24 14.2 0 24.9-10.7 24.9-24v-91.2z" />
  </svg>
);

const SvgClockFourThirtySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockFourThirtySolid;
