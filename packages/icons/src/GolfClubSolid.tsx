import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m508.6 46.33-223.1 447.1C279.2 505.2 268.1 512 255.1 512h-224C14.33 512 0 497.7 0 480v-7.999h47.1c8.836 0 15.1-7.164 15.1-15.1 0-8.837-7.164-15.1-15.1-15.1H0v-31.1h47.1c8.836 0 15.1-7.163 15.1-15.1 0-8.837-7.164-15.1-15.1-15.1H0v-23.1c0-17.67 14.35-32 32-32 3.288 0 6.592.505 9.792 1.534l221.1 71.36 187.6-375.2C456.1 6.491 468.3 0 480 0c16.7 0 32 13.37 32 32.04 0 4.81-1.1 9.69-3.4 14.29z" />
  </svg>
);

const SvgGolfClubSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGolfClubSolid;
