import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M374.5 115.3 266.7 9.4C260.6 3.375 252.3 0 243.6 0H140.3c-8.627 0-17 3.375-23.13 9.375l-107.8 105.9c-8.002 7.875-11.25 19.38-8.502 30.38l87.14 342.1C91.73 502 104.7 512 119.7 512h144.7c14.88 0 27.88-9.1 31.51-24.25l87.14-342.1c2.75-11.05-.55-22.55-8.55-30.35zM288 208c0 8.9-7.1 16-16.9 16H224v112c0 8.875-7.127 16-16.01 16H176c-8.9 0-16-7.1-16-16V224h-48.1c-8.9 0-15.98-7.1-15.98-16v-32c0-8.875 7.127-16 16.01-16H160v-48c0-8.9 7.1-16 16-16h31.99c8.91 0 16.01 7.1 16.01 16v48h47.99c8.91 0 16.01 7.1 16.01 16v32z" />
  </svg>
);

const SvgCoffinCrossSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoffinCrossSolid;
