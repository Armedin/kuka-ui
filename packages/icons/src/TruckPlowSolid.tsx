import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 192V80c0-26.51 21.5-48 48-48h93.9c22.5 0 43.3 11.8 54.9 31.07L402.1 192H448c17.7 0 32 14.3 32 32v64h32V176c0-7.3 2.5-14.3 7-20l64-79.99c11.1-13.8 31.2-16.04 44.1-5 14.7 11.04 16.9 31.19 5 44.09L576 187.2v169.6l56.1 71.2c11.9 13.8 9.7 33.9-5 44.1-12.9 11.9-33 9.7-44.1-5l-64-80c-4.5-4.8-7-11.8-7-19.1v-16h-37.5c3.6 10 5.5 20.8 5.5 32 0 53-43 96-96 96-53.9 0-96-43-96-96 0-11.2 1.9-22 5.5-32H224c-1.9 0-3.8-.2-5.6-.5 3.6 10.2 5.6 21.1 5.6 32.5 0 53-43 96-96 96-53.02 0-96-43-96-96 0-11.2 1.92-22 5.46-32H32c-17.67 0-32-14.3-32-32v-96c0-17.7 14.33-32 32-32h96zm64 0h135.5l-57.6-96H192v96zm-64 160c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm256 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgTruckPlowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckPlowSolid;
