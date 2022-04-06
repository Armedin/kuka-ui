import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-192 96c35.35 0 64 28.66 64 64s-28.65 64-64 64-64-28.66-64-64 28.7-64 64-64zm96 256H160c-8.836 0-16-7.164-16-16 0-44.18 35.82-80 80-80h64c44.18 0 80 35.82 80 80 0 8.8-7.2 16-16 16z" />
  </svg>
);

const SvgImageUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImageUserSolid;
