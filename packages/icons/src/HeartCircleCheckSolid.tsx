import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 368c0 35.7 10.6 68.9 28.9 96.6l-5.5 5.7c-13 12.9-33.9 12.9-45.9 0L39.71 270.5c-55.93-58-52.94-153.9 9.99-207.82 53.9-46.95 136.8-37.96 186.8 12.99l19.9 20.97 19-20.97c50-50.95 131.9-59.94 187.8-12.99 42.9 37.42 57.5 94.92 43.8 146.02-22.7-10.7-48.2-16.7-75-16.7-97.2 0-176 78.8-176 176zm320 0c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-99.3-43.3L416 385.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0z" />
  </svg>
);

const SvgHeartCircleCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeartCircleCheckSolid;
