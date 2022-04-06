import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M336 480H96c-35.35 0-64-28.65-64-64V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v304c0 53.02 42.98 96 96 96h240c8.836 0 16-7.164 16-16s-7.2-16-16-16zm93.3-366.7-94.51-94.51C322.7 6.742 306.5 0 289.5 0H160c-35.3 0-64 28.65-64 64l.01 288c0 35.35 28.65 64 64 64h224c35.39 0 63.99-28.7 63.99-64V158.5c0-17-6.7-33.2-18.7-45.2zM320 49.25 398.8 128H336c-8.8 0-16-7.2-16-16V49.25zM416 352c0 17.64-14.36 32-32 32H160c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v80c0 26.5 21.5 48 48 48h80v192z" />
  </svg>
);

const SvgFiles = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFiles;
