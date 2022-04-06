import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M240 48c0 26.51-21.5 48-48 48s-48-21.49-48-48 21.5-48 48-48 48 21.49 48 48zm-8 432c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.57 47.6c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.051-28.7-10.947-43.9l58.277-96.9C80.2 145.7 111.4 128 145.1 128H181c28.6 0 55.7 12.7 73.9 34.7l73.7 88.9c11.3 13.6 9.4 33.7-4.2 45-13.6 11.3-33.7 9.4-45-4.2L232 235.3V480zm88-96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-30.9 25.1-56 56-56s56 25.1 56 56v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V376c0-4.4-3.6-8-8-8s-8 3.6-8 8v8z" />
  </svg>
);

const SvgPersonCaneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonCaneSolid;
