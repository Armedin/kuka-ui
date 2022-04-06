import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-48.9 146c0-26.29 20.26-49.2 46.54-49.98C281.7 95.21 304 116.1 304 144h-32c-8.837 0-16 7.163-16 15.1 0 9.7 7.2 16.9 16 16.9h32v32h-32c-8.837 0-16 7.163-16 15.1 0 9.7 7.2 16.9 16 16.9h32v13.99c0 26.29-20.26 49.2-46.54 49.99C230.3 304.8 208 283 208 256l-.9-110zM384 256c0 65.1-49.03 118.4-112 126.4V400c0 8.837-7.163 16-16 16s-16-7.163-16-16v-17.62C177 374.4 128 321.1 128 256v-16.9c0-7.9 7.2-15.1 16-15.1s16 7.2 16 16v13.19c-.9 47.41 33.2 89.91 80 97.51 59.1 9.7 112-36.5 112-94.7v-16.9c0-7.9 7.2-15.1 16-15.1s16 7.2 16 15.1V256z" />
  </svg>
);

const SvgCircleMicrophoneLinesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleMicrophoneLinesSolid;
