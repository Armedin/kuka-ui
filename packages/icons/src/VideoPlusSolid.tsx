import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M336 64H48C21.49 64 0 85.49 0 112v288c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48-48-48zm-64 215.1h-56.9v56c0 14.2-9.8 24.9-23.1 24.9-13.27 0-23.1-10.74-23.1-23.1v-57.8h-57.8c-12.37 0-23.1-9.8-23.1-23.1 0-13.26 10.74-23.1 23.1-23.1H168v-57.8c0-12.4 10.7-23.1 24-23.1s23.1 10.74 23.1 23.1V232H272c13.3 0 24 10.7 24 24s-10.7 23.1-24 23.1zm253.6-177.4L416 177.3v157.4l109.6 75.49c21.2 14.61 50.4-.29 50.4-25.79V127.5c0-25.4-29.1-40.37-50.4-25.8z" />
  </svg>
);

const SvgVideoPlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVideoPlusSolid;
