import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L258.7 128H448c17.64 0 32 14.36 32 32v256zM256 288c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.4-32-32 14.4-32 32-32zm32 128h-64c-44.18 0-80 35.82-80 80 0 8.8 7.2 16 16 16s16-7.164 16-16c0-26.5 21.5-48 48-48h64c26.51 0 48 21.49 48 48 0 8.836 7.164 16 16 16s16-7.164 16-16c0-44.2-35.8-80-80-80z" />
  </svg>
);

const SvgFolderUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderUser;
