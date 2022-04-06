import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 416.1c-63.8 0-118.7-38.1-142.8-92.6-5.1-11.7 6.8-22.4 19.1-18.8 37.3 11.2 79.3 17.4 123.7 17.4 44.5 0 86.5-6.2 123.8-17.4 12.3-3.6 24.2 7.1 19.1 18.8-24.1 54.5-79 92.6-142.9 92.6zm-89.9-70.3c22.6 23.6 54.5 38.3 89.9 38.3 35.5 0 67.4-14.7 89.1-38.3-27.7 5.5-57.9 8.3-89.1 8.3-31.1 0-61.3-2.8-89.9-8.3zm-9.6-157.3c-6.3 7.2-10.8 16.8-13 25.4-2.1 8.6-10.8 13.8-19.4 11.6-8.6-2.1-13.8-10.8-11.6-19.4 3.2-12.7 9.8-27.1 19.8-38.6 10.1-11.6 24.9-21.5 43.7-21.5 18.8 0 33.6 9.9 43.7 21.5 10 11.5 16.6 25.9 19.8 38.6 2.2 8.6-3 17.3-11.6 19.4-8.6 2.2-17.3-3-19.4-11.6-2.2-8.6-6.7-18.2-13-25.4-6.1-7.1-12.7-10.5-19.5-10.5-6.8 0-13.4 3.4-19.5 10.5zm127.6 37c-8.6-2.1-13.8-10.8-11.6-19.4 3.2-12.7 9.8-27.1 19.8-38.6 10.1-11.6 24.9-21.5 43.7-21.5 18.8 0 33.6 9.9 43.7 21.5 10 11.5 16.6 25.9 19.8 38.6 2.2 8.6-3 17.3-11.6 19.4-8.6 2.2-17.3-3-19.4-11.6-2.2-8.6-6.7-18.2-13-25.4-6.1-7.1-12.7-10.5-19.5-10.5-6.8 0-13.4 3.4-19.5 10.5-6.3 7.2-10.8 16.8-13 25.4-2.1 8.6-10.8 13.8-19.4 11.6zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceGrinBeam = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceGrinBeam;