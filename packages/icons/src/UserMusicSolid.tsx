import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M389.4 347.7c-30.6-27.1-70.7-43.7-114.7-43.7H173.3C77.61 304 0 381.7 0 477.4 0 496.5 15.52 512 34.66 512h320.5C333.4 493.4 320 468.3 320 440c0-41 28-75.3 69.4-92.3zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm377.7-95.4-96 19.2c-14.9 3-25.7 15.3-25.7 31.4v161.2c-10.1-2.7-20.7-4.4-32-4.4-53.02 0-96 32.23-96 72 0 39.76 42.98 72 96 72s96-32.24 96-72V300.2l70.28-14.05C629.2 283.1 640 269.1 640 254.7V192c0-20.2-18.5-35.3-38.3-31.4z" />
  </svg>
);

const SvgUserMusicSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserMusicSolid;
