import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm112-272c0-44.1-35.9-80-80-80H176c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h70.35l77.5 90.41C343 382.1 347.5 384 352 384a15.89 15.89 0 0 0 10.41-3.859c6.719-5.75 7.5-15.84 1.75-22.55l-60.97-71.13C340.1 279.3 368 246.9 368 208zm-80 48h-96v-96h96c26.47 0 48 21.53 48 48s-21.5 48-48 48z" />
  </svg>
);

const SvgCircleR = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleR;
