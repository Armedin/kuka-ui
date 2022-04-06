import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M208 255.1c0-7.9-7.2-15.1-16-15.1s-16 7.2-16 15.1v64h-64c-8.84 0-16 7.16-16 15.1 0 8.834 7.156 15.1 16 15.1h64v64c0 11.5 7.2 18.7 16 18.7 8.836 0 16-7.16 16-15.1v-65.8h64c8.84 0 16-7.16 16-15.1s-7.16-15.1-16-15.1h-64v-65.8zm157.3-129.8L258.8 18.8C246.7 6.742 230.5 0 213.5 0H64C28.66 0 0 28.65 0 64l.006 384c0 35.35 28.66 64 64 64H320c35.35 0 64-28.65 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.477 1.566 8.664 3.846 12.12 7.299l106.5 106.5c3.48 3.421 5.78 7.621 7.28 12.121H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256z" />
  </svg>
);

const SvgFilePlus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilePlus;
