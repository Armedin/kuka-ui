import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 256c0-8.9-4.9-15.5-10.7-20l-96-64c-11-7.3-25.9-4.3-33.3 6.7-7.3 11-4.3 25.9 6.7 32.4l85.3 57.7V392c0 13.3 10.7 24 24 24s24-10.7 24-24V256z" />
  </svg>
);

const SvgClockTenThirtySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockTenThirtySolid;
