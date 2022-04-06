import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M377.2 288H70.79C49.37 288 32 270.6 32 249.2V224c0-106.9 85.1-192 192-192 106 0 192 85.1 192 192v25.2c0 21.4-17.4 38.8-38.8 38.8zm134.8 0c-2 0-4-.1-5.9-.3-16.2 53.3-64.3 92.7-122.1 96.1V440c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-56h-64v56c0 22.1-17.9 40-40 40h-48c-22.09 0-40-17.9-40-40v-56H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h344c39.8 0 72-32.2 72-72v-88c0-35.3 28.7-64 64-64h32c53 0 96 42.1 96 96v32c0 35.3-28.7 64-64 64h-64zm16-64c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z" />
  </svg>
);

const SvgTurtleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurtleSolid;
