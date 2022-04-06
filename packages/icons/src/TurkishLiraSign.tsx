import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M80 32c8.84 0 16 7.16 16 16v77.1l155.6-44.48c8.5-2.43 16.5 2.49 19.8 10.98 2.4 8.5-2.5 16.5-11 19.8L96 158.4v62.7l155.6-44.5c8.5-2.4 16.5 2.5 19.8 11 2.4 8.5-2.5 16.5-11 19.8L96 254.4V448h95.2c84.9 0 156.3-67.6 159.8-153.3l1-23.4c.4-8.8 7.8-15.7 16.7-15.3 8.8.4 15.7 7.8 14.4 16.7l-.1 22.4C378.7 398.8 294.1 480 191.2 480H80c-8.84 0-16-7.2-16-16V263.5l-27.6 7.9c-8.5 2.4-17.36-2.5-19.78-11-2.43-8.5 2.49-17.4 10.98-19.8L64 230.2v-62.7l-27.6 7.9c-8.5 2.4-17.36-2.5-19.78-11-2.43-8.5 2.49-17.4 10.98-19.8L64 134.2V48c0-8.84 7.16-16 16-16z" />
  </svg>
);

const SvgTurkishLiraSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurkishLiraSign;
