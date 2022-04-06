import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm16-256h-20.7l79.16-67.84a16.014 16.014 0 0 0 4.594-17.72C332.7 132.2 326.7 128 320 128H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h100.8l-79.2 67.8c-5.1 4.4-6.9 11.5-4.6 17.8 2.3 6.2 8.3 10.4 15 10.4h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-54.5a27.7 27.7 0 0 1-26.33-19c-2.797-8.344-11.8-12.94-20.25-10.12-8.375 2.812-12.91 11.88-10.12 20.25 7.3 24.47 31 40.87 56.7 40.87H272c44.11 0 80-35.88 80-80s-35.9-80-80-80z" />
  </svg>
);

const SvgCircle3 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle3;
