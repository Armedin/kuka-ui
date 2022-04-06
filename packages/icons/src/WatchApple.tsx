import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M168 256c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm88 72c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-128 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm128-144c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-128 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm16 72c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm96 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zM64 65.6V48c0-26.51 21.49-48 48-48h160c26.5 0 48 21.49 48 48v17.6c36.5 7.41 64 39.7 64 78.4v224c0 38.7-27.5 70.1-64 78.4V464c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48v-17.6C27.48 438.1 0 406.7 0 368V144c0-38.7 27.48-70.99 64-78.4zM96 64h192V48c0-8.84-7.2-16-16-16H112c-8.8 0-16 7.16-16 16v16zm16 416h160c8.8 0 16-7.2 16-16v-16H96v16c0 8.8 7.2 16 16 16zM32 144v224c0 26.5 21.49 48 48 48h224c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H80c-26.51 0-48 21.5-48 48z" />
  </svg>
);

const SvgWatchApple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWatchApple;
