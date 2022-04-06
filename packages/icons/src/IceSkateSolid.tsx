import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 384h416c17.7 0 32-14.3 32-32v-37c0-44.13-29.97-82.37-72.72-93.12L320 192h-48c-8.801 0-16-7.203-16-16 0-8.801 7.199-16 16-16h48v-32h-48c-8.801 0-16-7.203-16-16 0-8.801 7.199-16 16-16h48V16c0-8.801-7.199-16-16-16h-31.1c-8.801 0-16 7.199-16 16v16L78.38 82.75c-27.5 7.875-46.38 33-46.38 61.5V352c0 17.7 14.33 32 32 32zm488 32c-13.2 0-24 10.8-24 23.1 0 14.2-10.7 24.9-24 24.9h-71.1v-48h-48v48h-240l-.9-48H96v48H32C14.4 464 .9 478.4.9 495.1 0 510 13.18 512 16 512h496c35.2 0 64-28.8 64-64v-8.9c0-12.3-10.8-23.1-24-23.1z" />
  </svg>
);

const SvgIceSkateSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIceSkateSolid;
