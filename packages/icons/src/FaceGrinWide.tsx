import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M379.8 304.7c12.3-3.6 24.2 7.1 19.1 18.8-24.1 54.5-79 92.6-142.9 92.6-63.8 0-118.7-38.1-142.8-92.6-5.1-11.7 6.8-22.4 19.1-18.8 37.3 11.2 79.3 17.4 123.7 17.4 44.5 0 86.5-6.2 123.8-17.4zm-34.7 41.1c-27.7 5.5-57.9 8.3-89.1 8.3-31.1 0-61.3-2.8-89.9-8.3 22.6 23.6 54.5 38.3 89.9 38.3 35.5 0 67.4-14.7 89.1-38.3zM192 240c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96zm160 0c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z" />
  </svg>
);

const SvgFaceGrinWide = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceGrinWide;
