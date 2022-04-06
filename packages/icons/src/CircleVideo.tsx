import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M409.2 178.9a16.012 16.012 0 0 0-14.64-1.922L320 204.1V192c0-17.67-14.33-32-32-32H160c-17.7 0-32 14.3-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-12.1l74.53 27.1c1.77.7 3.67 1 5.47 1 3.234 0 6.453-.984 9.172-2.891C413.5 330.1 416 325.2 416 320V192c0-5.2-2.5-10.1-6.8-13.1zM288 320H160V192h128v128zm96-22.8-64-23.3v-35.8l64-23.27v82.37zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleVideo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleVideo;
