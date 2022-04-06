import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M301.2 34.84a32.132 32.132 0 0 0-13.16-2.841 31.994 31.994 0 0 0-21.27 8.1L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.96 8 13.56 10.8 21.26 10.8 4.438 0 8.959-.931 13.16-2.837C312.7 472 320 460.6 320 448V64c0-12.59-7.3-24.9-18.8-29.16zM287.1 447.1l-144-128H48c-8.822 0-16-7.16-16-15.96v-96c0-8.801 7.178-15.96 16-15.96h95.1l143.1-127.1c.008-.008-.004.004 0 0l.9 383.02z" />
  </svg>
);

const SvgVolumeOff = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVolumeOff;
