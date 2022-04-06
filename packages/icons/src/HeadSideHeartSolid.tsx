import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M509.2 275c-21-47.13-48.5-151.8-73.12-186.8C397.1 32.88 333.7 0 266.1 0H192C86 0 0 86 0 192c0 54.5 23.25 106.5 64 142.9V512h256l-.005-64h63.99c35.38 0 63.1-28.62 63.1-63.1V320h31.1c10.88 0 20.89-5.5 26.77-14.62C512.8 296.4 513.6 284.9 509.2 275zm-178.8-76.7-83 85.6c-5.387 5.504-13.95 5.504-19.34 0l-82.96-85.6c-24.11-25.02-22.64-66.17 4.285-89.19 23.5-20.02 58.39-16.39 79.81 5.754l8.445 8.754L246 114.9c21.55-22.14 56.56-25.77 79.93-5.754C353 132.1 354.5 173.3 330.4 198.3z" />
  </svg>
);

const SvgHeadSideHeartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeadSideHeartSolid;
