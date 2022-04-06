import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm99.9-330.4L256 266.1l-99.9-116.5c-5.7-6.7-15.8-7.4-22.5-1.8-6.719 5.75-7.5 15.88-1.734 22.56L240 296.6V384c0 8.844 7.156 16 16 16s16-7.156 16-16v-87.4l108.1-126.2c5.766-6.688 4.984-16.81-1.734-22.56-6.666-5.64-16.766-4.94-22.466 1.76z" />
  </svg>
);

const SvgCircleY = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleY;
