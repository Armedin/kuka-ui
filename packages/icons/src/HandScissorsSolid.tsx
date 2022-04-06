import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 192v111.1c0 80.3-64.6 144.9-144 144.9h-80c-26.52 0-48-21.48-48-47.99 0-9.152 2.697-17.61 7.139-24.89C224.9 370.1 208 351.5 208 328c0-16.72 8.561-31.4 21.52-39.1H40c-22.09 0-40-17.9-40-39.99s17.91-39.1 40-39.1h229.5L60 142.2c-17.07-5.4-28.01-21.1-28.01-38.2 0-3.973.597-8.014 1.851-12.01 5.35-17.07 21.08-28.04 38.06-28.04 4 0 8.071.608 12.09 1.889l279.2 87.22c1.609.541 3.209.741 4.809.741 6.812 0 13.12-4.375 15.27-11.23.498-1.588.735-3.195.735-4.777 0-6.807-4.388-13.12-11.23-15.25l-72.54-22.67 14.29-17.85C323.6 70.67 337.4 64.04 352 64.04h48c10.39 0 20.48 3.359 28.8 9.592l38.41 28.79c25.2 18.91 40.53 47.97 43.55 79.04C511.5 184.9 512 188.4 512 192z" />
  </svg>
);

const SvgHandScissorsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandScissorsSolid;