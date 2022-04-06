import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M283.3 148.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L329.4 240H144c-8.8 0-16 7.2-16 16s7.156 16 16 16h185.4l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l96-96C382.4 264.2 384 260.1 384 256s-1.562-8.188-4.688-11.31L283.3 148.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleArrowRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowRight;
