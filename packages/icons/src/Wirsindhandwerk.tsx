import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M50.772 479.812h83.36V367.847l-83.36 47.01Zm329.046 0h82.35v-64.956l-82.35-47.009Zm.006-448v219.756l-123.648-72.382-121.672 72.382V31.812H50.772v360.794l205.404-122.287 205.993 122.287V31.812Z" />
  </svg>
);

const SvgWirsindhandwerk = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWirsindhandwerk;
