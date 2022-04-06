import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M381.6 236.3c-5 11.9-16.7 19.7-29.6 19.7h-96v192c0 17.67-14.33 32-32 32h-64c-17.67 0-32-14.33-32-32V256H32a31.997 31.997 0 0 1-29.56-19.75C-2.516 224.3.219 210.5 9.375 201.4l159.1-160C175.6 35.13 183.8 32 192 32s16.38 3.125 22.62 9.375l160 160c9.18 9.125 11.88 22.925 6.98 34.925z" />
  </svg>
);

const SvgUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpSolid;
