import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M240 272h-32c-17.66 0-32 14.34-32 32s14.34 32 32 32h32c17.66 0 32-14.34 32-32s-14.3-32-32-32zm-24-48h16c13.2 0 24-10.8 24-24s-10.8-24-24-24h-16c-13.2 0-24 10.8-24 24s10.8 24 24 24zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM240 384h-32c-44.1 0-80-35.9-80-80 0-25.06 11.81-47.19 29.9-61.87C149.3 230.3 144 215.8 144 200c0-39.7 32.3-72 72-72h16c39.69 0 72 32.31 72 72 0 15.77-5.254 30.26-13.9 42.13C308.2 256.8 320 278.9 320 304c0 44.1-35.9 80-80 80z" />
  </svg>
);

const SvgSquare8Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare8Solid;
