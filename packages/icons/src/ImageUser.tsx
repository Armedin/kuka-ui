import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 256c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64 28.7 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.4-32-32 14.4-32 32-32zm32 128h-64c-44.18 0-80 35.82-80 80 0 8.836 7.164 16 16 16s16-7.2 16-16c0-26.5 21.5-48 48-48h64c26.51 0 48 21.49 48 48 0 8.836 7.173 16 16.01 16s16-7.164 16-16c-.01-44.2-35.81-80-80.01-80zM448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgImageUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImageUser;
