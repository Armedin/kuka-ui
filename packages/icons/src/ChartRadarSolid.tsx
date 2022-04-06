import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M330.4 281.4c17 4.5 29.6 20.1 29.6 38.6 0 22.1-17.9 40-40 40-15.9 0-29.7-9.3-36.1-22.7l-97.2-19.5c-7.1 6.3-16.5 10.2-26.7 10.2-22.1 0-40-17.9-40-40s17.9-40 40-40l57.6-76.8c-1-3.5-1.6-7.3-1.6-11.2 0-22.1 17.9-40 40-40s40 17.9 40 40c0 7.6-2.1 14.7-5.8 20.8l40.2 100.6zM202 271.9l79.3 15.9-31.7-79.2-47.6 63.3zM107.1 63.75C118.6 44.09 139.6 32 162.4 32h187.2c22.8 0 43.8 12.09 55.3 31.75l93.3 160.05c11.7 19.9 11.7 44.5 0 64.4l-93.3 160c-11.5 19.7-32.5 31.8-55.3 31.8H162.4c-22.8 0-43.8-12.1-55.3-31.8l-93.33-160a63.8 63.8 0 0 1 0-64.4L107.1 63.75zM349.6 96H162.4L69.05 256l93.35 160h187.2l92.5-160-92.5-160z" />
  </svg>
);

const SvgChartRadarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartRadarSolid;
