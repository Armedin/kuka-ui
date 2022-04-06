import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 442.5c-10.9 3.6-20.8 5.5-32 5.5-53.02 0-96-43-96-96V64C14.33 64 0 49.67 0 32S14.33 0 32 0h192c17.7 0 32 14.33 32 32s-14.3 32-32 32v245.9l-49 79.5c-9.8 16-15 34.4-15 53.1zM96 160h64V64H96v96zM512 0c17.7 0 32 14.33 32 32s-14.3 32-32 32v150.9l117.7 191.3c6.7 11 10.3 23.5 10.3 36.4 0 38.3-31.1 69.4-69.4 69.4H261.4c-38.3 0-70.3-31.1-70.3-69.4 0-12.9 4.5-25.4 11.2-36.4l116.8-191.3V64c-16.8 0-32-14.33-32-32s15.2-32 32-32H512zM384 64v160c0 5.9-1.6 11.7-4.7 16.8L330.5 320h171l-48.8-79.2c-3.1-5.1-4.7-10.9-4.7-16.8V64h-64z" />
  </svg>
);

const SvgFlaskVialSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlaskVialSolid;
