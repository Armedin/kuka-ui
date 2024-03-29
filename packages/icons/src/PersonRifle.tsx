import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M260.7 192c28.3 0 55 10.7 74.4 29.1v275.1c.8 7.9-6.3 15.8-15.1 15.8s-16-7.2-16-16V236.7c-12.7-8.1-27.7-12.7-43.3-12.7h-41.4c-15.6 0-30.6 4.6-43.3 12.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V275.8L62.32 439.2c-3.95 7.9-13.56 11.1-21.47 7.1-7.9-3.9-11.11-13.6-7.15-21.5l85.5-170.9c18.9-38.8 57.7-61.9 100.1-61.9h41.4zM320 80c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-44.18 35.8-80 80-80s80 35.82 80 80zm-80-48c-26.5 0-48 21.49-48 48 0 26.5 21.5 48 48 48s48-21.5 48-48c0-26.51-21.5-48-48-48zm272 176c0-8.8 7.2-16 16-16s16 7.2 16 16v84.5c0 6.9-4.4 13-10.9 15.1L480 325.3V352l3.2 16H528c8.8 0 16 7.2 16 16s-7.2 16-16 16h-38.4l18.6 92.9c2 9.9-5.6 19.1-15.7 19.1H400c-8.8 0-16-7.2-16-16V395.7c-9.6-5.5-16-15.9-16-27.7V224c0-11.8 6.4-22.2 16-27.7V160c0-17.7 14.3-32 32-32V32c-8.8 0-16-7.16-16-16 0-8.836 7.2-16 16-16h16c8.8 0 16 7.164 16 16v112c17.7 0 32 14.3 32 32v128l32-8v-72zm-96 6.7-16 9.3v144l16 9.3V480h56.1L448 355.2V160h-32v54.7z" />
  </svg>
);

const SvgPersonRifle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonRifle;
