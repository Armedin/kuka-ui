import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M32 142.3c0 9.3 2.05 18.5 6 27L48.59 192H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H63.52l22.4 48H432c5.2 0 10.1 2.5 13.1 6.8 3 4.2 3.7 9.7 2 14.6l-28.7 80.1c-9.1 24.6-33.2 42.5-60.2 42.5H256v64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h112v-64h-55.2c-31.1 0-59.4-18.9-72.54-46.2l-87.254-187A95.624 95.624 0 0 1 0 142.3V16C0 7.164 7.164 0 16 0c8.84 0 16 7.164 16 16v126.3zM358.2 384c13.5 0 25.6-8.5 30.1-21.2l21-58.8H100.9l24.4 52.3c7.8 16.9 24.8 27.7 43.5 27.7h189.4z" />
  </svg>
);

const SvgSeatAirline = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSeatAirline;
