import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L258.7 128H448c17.64 0 32 14.36 32 32v256zM267.3 196.7c-6.25-6.25-16.38-6.25-22.62 0l-80 80c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L240 246.6V368c0 8.844 7.156 16 16 16s16-7.156 16-16V246.6l52.69 52.69C327.8 302.4 331.9 304 336 304s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L267.3 196.7z" />
  </svg>
);

const SvgFolderArrowUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderArrowUp;
