import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 448H32c-17.66 0-32 14.34-32 32s14.34 32 32 32h384c17.66 0 32-14.34 32-32s-14.3-32-32-32zm0-96H32c-17.66 0-32 14.34-32 32s14.34 32 32 32h384c17.66 0 32-14.34 32-32s-14.3-32-32-32zm16-328c-8.064 0-14.75 5.984-15.84 13.73L336 26.27V24c0-13.25-10.8-24-24-24s-24 10.75-24 24v80c0 13.2 10.8 24 24 24s24-10.75 24-24v-2.3l80.16-11.46C417.2 98.02 423.9 104 432 104c8.832 0 16-7.168 16-16V40c0-8.83-7.2-16-16-16zm-16 232H144c-44.19 0-80-35.8-80-80s35.81-80 80-80h112V32H144C64.48 32 0 96.48 0 176s64.48 144 144 144h272c17.66 0 32-14.34 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgHoseSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHoseSolid;
