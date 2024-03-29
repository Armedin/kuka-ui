import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32h160c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32s-32-14.3-32-32v-82.7L342.6 374.6c-12.5 12.5-32.7 12.5-45.2 0L191.1 269.3 54.63 406.6c-12.5 12.5-32.76 12.5-45.258 0-12.496-12.5-12.496-32.7 0-45.2l160.028-160c12.5-12.5 32.7-12.5 45.2 0L320 306.7l146.7-147.6-82.7.9z" />
  </svg>
);

const SvgArrowTrendUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowTrendUpSolid;
