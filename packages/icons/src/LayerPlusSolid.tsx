import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 0c13.3 0 24 10.75 24 24v32h32c13.3 0 24 10.75 24 24s-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-32c-13.3 0-24-10.75-24-24s10.7-24 24-24h32V24c0-13.25 10.7-24 24-24zm66.1 234.2c8.5 3.9 13.9 12.4 13.9 20.9 0 10.2-5.4 18.7-13.9 22.7l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.57-101C5.438 273.8 0 265.3 0 255.1c0-8.5 5.437-17 13.93-20.9l218.57-101c14.9-6.9 32.1-6.9 47 0l218.6 101zM292.9 407.8l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 20.9 0 10.2-5.4 18.7-13.9 22.7l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.57-101C5.438 401.8 0 393.3 0 383.1c0-8.5 5.437-17 13.93-20.9l53.2-24.6 151.97 70.2c23.4 10.9 50.4 10.9 73.8 0z" />
  </svg>
);

const SvgLayerPlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLayerPlusSolid;
