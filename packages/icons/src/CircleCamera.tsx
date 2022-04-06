import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 224c-17.7 0-32 14.3-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm80-64h-20l-6.188-16.44C306.3 134.2 297.4 128 287.4 128h-62.8c-10 0-19 6.188-22.5 15.56L196 160h-20c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.51 0 48-21.49 48-48v-96c0-26.5-21.5-48-48-48zm16 144c0 8.822-7.178 16-16 16H176c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h42.22l11.93-32h51.66l12.04 32H336c8.8 0 16 7.2 16 16v96zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleCamera = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleCamera;
