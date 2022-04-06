import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M365.3 125.3 258.8 18.8C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.66 0 64l.006 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.477 1.562 8.666 3.844 12.12 7.297l106.5 106.5c3.48 3.423 5.78 7.623 7.28 12.123H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256zM224 240c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 15.1V336c0 8.836 7.164 15.1 16 15.1h48v47.1c0 10.6 7.2 17.8 16 17.8h32c8.836 0 16-7.166 16-16v-47.1h48c8.836 0 16-7.163 16-15.1v-34.7c0-7.9-7.2-15.1-16-15.1h-48v-48z" />
  </svg>
);

const SvgFileMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileMedical;
