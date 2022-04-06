import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 128h-16v-16c0-26.51-21.5-48-48-48H128v-8c0-13.26-10.7-24-24-24S80 42.74 80 56v9.613C34.64 73.27 0 112.5 0 160c0 47.59 34.72 86.81 80.16 94.4L33.25 439.2c-5.84 20.4 9.51 40.8 30.77 40.8h103.8c14.29 0 26.84-9.469 30.77-23.21L220.6 376H272v16c0 13.25 10.75 24 24 24s24-10.7 24-24v-80c0-13.3-10.7-24-24-24s-24 10.7-24 24v16h-38.4l19.6-72H496c26.5 0 48-21.5 48-48v-16h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-112 64H96c-17.67 0-32-14.3-32-32s14.33-32 32-32h352c17.67 0 32 14.33 32 32s-14.3 32-32 32z" />
  </svg>
);

const SvgGunSquirtSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGunSquirtSolid;
