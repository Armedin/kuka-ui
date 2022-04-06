import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M523.9 31.1H574c29.4 0 54.1 20.89 62.1 49.38L640 95.1l-96 24v72c0 88-59.1 163-139.8 185.7l42 102.1c5 12.2-.8 26.2-13.1 31.3-12.2 5-26.2-.8-31.3-13.1l-46.6-114c-1.1 0-2.1.9-3.2.9h-40.9l39.1 94.9c5 12.2-.8 26.2-13.1 31.3-12.2 5-26.2-.8-31.3-13.1L259.2 384H126.1l-74.59 57.4c-14.01 10.7-34.1 8.1-44.872-5.9-10.776-14-8.155-34.1 5.852-44.9L368 117.2V88c0-48.6 39.4-88 88-88 27.3 0 51.7 12.46 67.9 32v-.9zm-67.9 80c13.3 0 24-9.8 24-24 0-12.36-10.7-24-24-24s-24 11.64-24 24c0 14.2 10.7 24 24 24z" />
  </svg>
);

const SvgCrowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCrowSolid;
