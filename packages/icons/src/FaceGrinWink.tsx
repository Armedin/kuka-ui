import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 416.1c-63.8 0-118.7-38.1-142.8-92.6-5.1-11.7 6.8-22.4 19.1-18.8 37.3 11.2 79.3 17.4 123.7 17.4 44.5 0 86.5-6.2 123.8-17.4 12.3-3.6 24.2 7.1 19.1 18.8-24.1 54.5-79 92.6-142.9 92.6zm-89.9-70.3c22.6 23.6 54.5 38.3 89.9 38.3 35.5 0 67.4-14.7 89.1-38.3-27.7 5.5-57.9 8.3-89.1 8.3-31.1 0-61.3-2.8-89.9-8.3zM200.4 208c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24zm78 28.8c-7.1-5.3-8.5-15.3-3.2-22.4 30.4-40.5 91.2-40.5 121.6 0 5.3 7.1 3.9 17.1-3.2 22.4-7.1 5.3-17.1 3.9-22.4-3.2-17.6-23.5-52.8-23.5-70.4 0-5.3 7.1-15.3 8.5-22.4 3.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceGrinWink = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceGrinWink;