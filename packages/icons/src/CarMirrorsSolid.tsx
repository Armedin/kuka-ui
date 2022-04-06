import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 192c0-17.7 14.33-32 32-32h52.5l22.3-63.71C120.3 57.78 156.6 32 197.4 32h181.2c40.8 0 77.1 25.78 90.6 64.29L491.5 160H544c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8.6c5.5 9.4 8.6 20.3 8.6 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-48H128v48c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32V256c0-11.7 3.12-22.6 8.56-32H32c-17.67 0-32-14.3-32-32zm141.1 0h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4H197.4c-13.6 0-25.7 8.6-30.2 21.4L141.1 192zM128 256c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

const SvgCarMirrorsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCarMirrorsSolid;
