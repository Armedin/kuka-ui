import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64C28.72 0 0 28.7 0 64v431.1c0 5.844 3.188 11.23 8.312 14.04 5.125 2.781 11.34 2.562 16.28-.531L192 402.1l167.4 106.5c2.6 2.6 5.6 3.4 8.6 3.4 2.656 0 5.281-.656 7.688-1.969C380.8 507.2 384 501.8 384 495.1V64c0-35.3-28.7-64-64-64zm32 466.9-151.4-96.36c-3.5-1.74-5.6-2.54-8.6-2.54s-5.969.828-8.594 2.5L32 466.9V64c0-17.64 14.34-32 32-32h256c17.66 0 32 14.36 32 32v402.9z" />
  </svg>
);

const SvgBookmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookmark;
