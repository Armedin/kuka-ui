import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160c0-35.3-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L258.7 128H448c17.64 0 32 14.36 32 32v256zm-161.9-88.5c11.2-15.7 17.9-34.8 17.9-55.5 0-52.94-43.06-96-96-96s-96 43.06-96 96 43.06 96 96 96c20.7 0 39.76-6.734 55.46-17.92l61.23 61.23C359.8 414.4 363.9 416 368 416s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L318.1 327.5zM240 336c-35.28 0-64-28.72-64-64s28.72-64 64-64 64 28.72 64 64-28.7 64-64 64z" />
  </svg>
);

const SvgFolderMagnifyingGlass = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderMagnifyingGlass;
