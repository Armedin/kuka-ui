import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M292.3 135a39.942 39.942 0 0 0-43.59-8.688C233.7 132.6 224 147.1 224 163.3V192h-72c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h72v28.69c0 16.25 9.688 30.75 24.69 36.97 14.95 6.188 32 2.812 43.48-8.562l96.11-92.81c15.12-15.12 15.33-41.25-.203-56.75L292.3 135zm73.6 126.5-96 92.69C265 359 256 356.1 256 348.7V288H152c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h104v-60.7c0-6.414 8.047-11.26 13.86-5.471l95.8 92.5c4.24 4.171 1.84 9.571.24 11.171zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleRight;
