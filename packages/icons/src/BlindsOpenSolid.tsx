import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 464 0 512h512l-16-48H16zm48-255.8V192H16L0 240h39.12c5.5-12.5 14-23.5 24.88-31.8zM175.6 320c-15 20.1-38.5 32-63.6 32s-48.62-11.88-63.62-32H16L0 368h512l-16-48H175.6zM160 192v16.25c10.9 8.25 19.4 19.25 24.9 31.75H512l-16-48H160zM512 48V16c0-8.875-7.1-16-16-16H16C7.125 0 0 7.125 0 16v32c0 8.88 7.125 16 16 16L0 112h64V64h32v163c-22.9 7.8-35.25 30.2-31.25 53.2 3.875 23.13 23.87 40 47.25 40s43.38-16.87 47.25-40c3.95-23-10.15-45.4-31.25-53.2V64h32v48h352l-16-48c8.9 0 16-7.12 16-16z" />
  </svg>
);

const SvgBlindsOpenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlindsOpenSolid;
