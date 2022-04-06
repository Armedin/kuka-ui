import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 320c35.35 0 64-28.65 64-64v-96c0-35.35-28.65-64-64-64s-64 28.7-64 64v96c0 35.3 28.7 64 64 64zm-32-160c0-17.64 14.36-32 32-32s32 14.36 32 32h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v32h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c0 17.64-14.36 32-32 32s-32-14.4-32-32v-96zm144 64c-8.8 0-16 7.2-16 15.1V256c0 52.94-43.06 96-96 96s-96-43.1-96-96v-16c0-8.8-7.2-16-16-16s-16 7.2-16 15.1V256c0 65.1 49.03 118.4 112 126.4V400c0 8.844 7.156 16 16 16s16-7.156 16-16v-17.62C334.1 374.4 384 321.1 384 256v-16.9c0-7.9-7.2-15.1-16-15.1zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleMicrophoneLines = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleMicrophoneLines;
