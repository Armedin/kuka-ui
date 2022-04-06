import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M340.9 137.2c-15.6-15.6-40.97-15.6-56.57 0l-50.93 50.9-20.3-20.3c-11.5-11.5-28.6-14.9-43.6-8.7-15 6.3-24.7 20.8-24.7 37l-2.33 133.1c-.021 21.94 18.59 40.27 39.98 40.27l133.6-2.332c16.16-.078 30.6-9.742 36.8-24.7 6.209-15 2.807-32.11-8.684-43.59l-20.29-20.29 50.91-50.91c15.6-15.6 15.6-40.96 0-56.57L340.9 137.2zm11.3 67.9-73.54 73.54 42.91 42.91c5.258 5.258 1.205 13.66-5.656 13.66l-133.7 2.352c-2.254.004-7.754-2.094-7.725-8.008l2.332-133.1c.018-8.199 9.131-10.47 13.67-5.93l42.91 42.91 73.54-73.54c3.115-3.113 8.197-3.115 11.31-.002l33.94 33.94c3.109 3.068 3.109 7.268.009 11.268zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleDownLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleDownLeft;
