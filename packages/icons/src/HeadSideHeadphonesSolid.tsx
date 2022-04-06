import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M509.2 275c-21-47.12-48.5-151.8-73.12-186.8C397.1 32.88 333.8 0 266.1 0h-10.13v107.2c37.75 18 63.1 56.13 63.1 100.8 0 61.88-50.12 112-111.1 112S95.1 269.9 95.1 208c0-44.62 26.25-82.75 64-100.8V2.88C69.25 18.13 0 96.88 0 192c0 54.5 23.26 106.6 64.01 142.8L64 512h256l.003-64h63.99c35.38 0 63.1-28.62 63.1-63.1V320h31.1c10.88 0 20.88-5.5 26.76-14.62C512.8 296.4 513.6 284.9 509.2 275zM128 208c0 44.12 35.87 80 79.1 80s79.1-35.88 79.1-80-34.1-80-78.2-80-80 35.9-80 80zm79.1-32c17.63 0 32 14.38 32 32s-14.38 32-32 32-32-14.38-32-32 15.3-32 32-32z" />
  </svg>
);

const SvgHeadSideHeadphonesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeadSideHeadphonesSolid;
