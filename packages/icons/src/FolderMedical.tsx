import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160c0-35.3-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L258.7 128H448c17.64 0 32 14.36 32 32v256zM336 256h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 15.1V304c0 8.836 7.164 15.1 16 15.1h48v47.1c0 10.6 7.2 17.8 16 17.8h32c8.836 0 16-7.166 16-16v-48.9l48-.001c8.836 0 16-7.162 16-15.1V271.1c0-7.9-7.2-15.1-16-15.1z" />
  </svg>
);

const SvgFolderMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderMedical;
