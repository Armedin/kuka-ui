import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M584.2 96.36c-28.88-1.701-54.71 17.02-79.74 26.49C490 88.22 455.9 64 416 64c-11.25 0-22 2.252-32 5.877V56c0-13.25-10.8-24-24-24h-16c-13.2 0-24 10.75-24 24v49c-34.9-25.38-78.8-41-128-41C85.1 64 0 135.6 0 224v232c0 13.3 10.75 24 24 24h48c13.25 0 24-10.7 24-24v-62.87C128.4 407.5 166.8 416 208 416s79.63-8.492 112-22.87V456c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288h128v32c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16v-32c17.62 0 32-14.38 32-32v-96.07c-.9-32.13-23.6-61.68-55.8-63.57zM447.1 176c-8.875 0-16-7.125-16-16s8-16 16.9-16 16 7.125 16 16-7.1 16-16.9 16z" />
  </svg>
);

const SvgHippoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHippoSolid;
