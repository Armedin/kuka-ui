import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 400c0 26.5 21.49 48 48 48h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.18 0-80-35.8-80-80V48c0-8.84 7.164-16 16-16 8.84 0 16 7.16 16 16v352zm288-64c0-8.8 7.2-16 16-16h89.4L320 214.6l-84.7 84.7c-6.2 6.3-16.4 6.3-22.6 0l-112-112c-6.26-6.2-6.26-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0L224 265.4l84.7-84.7c6.2-6.3 16.4-6.3 22.6 0L448 297.4V208c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16z" />
  </svg>
);

const SvgChartLineDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartLineDown;
