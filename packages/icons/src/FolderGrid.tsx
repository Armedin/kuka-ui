import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160c0-35.3-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L258.7 128H448c17.64 0 32 14.36 32 32v256zM152 240h-48c-13.23 0-24 10.8-24 24v48c0 13.22 10.77 24 24 24h48c13.23 0 24-10.78 24-24v-48c0-13.2-10.8-24-24-24zm-8 64h-32v-32h32v32zm136-64h-48c-13.2 0-24 10.8-24 24v48c0 13.22 10.77 24 24 24h48c13.23 0 24-10.78 24-24v-48c0-13.2-10.8-24-24-24zm-8 64h-32v-32h32v32zm136-64h-48c-13.23 0-24 10.78-24 24v48c0 13.22 10.77 24 24 24h48c13.23 0 24-10.78 24-24v-48c0-13.2-10.8-24-24-24zm-8 64h-32v-32h32v32z" />
  </svg>
);

const SvgFolderGrid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderGrid;
