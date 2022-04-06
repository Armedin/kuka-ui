import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m498.6 428.4-18.6-9.3V408c0-13.23-10.77-24-24-24H344c-13.2 0-24 10.8-24 24v11.06l-18.58 9.344C293.3 432.3 288 440.7 288 449.9V488c0 13.23 10.77 24 24 24h176c13.23 0 24-10.77 24-24v-38.13c0-9.07-5.2-17.57-13.4-21.47zM480 480H320v-25.12l32-16.09V416h96v22.79l32 16.09V480zM56.88 224h-7.91c-8.87 0-15.42 5.4-16.74 13.3C30.55 247.3 38.3 256 48 256h16.01L64 284.5c-.063 16.62-1.307 33.16-3.266 49.62C59.6 343.6 67.06 352 76.65 352c8.205 0 15.02-6.195 15.97-14.35C94.69 320 96 302.3 96 284.5V256h64v28.5c0 17.82 1.312 35.53 3.377 53.15C164.3 345.8 171.1 352 179.3 352c9.592 0 17.05-8.355 15.92-17.88-1.92-16.42-3.12-33.02-3.22-49.62V256h15.02c7.979 0 15.42-5.4 16.74-13.27C225.4 232.7 217.7 224 208 224h-8.9l31.75-84.75c5.197-13.69.549-29.54-12.61-38.22C212.1 97.53 206.6 96 200.2 96H144V64h15.02c7.979 0 15.42-5.4 16.74-13.27C177.4 40.74 169.7 32 160 32h-16V16.97c0-7.979-5.4-15.42-13.27-16.74C120.7-1.449 112 6.303 112 16v16H96.86c-7.98 0-15.31 5.4-16.63 13.26C78.55 55.26 86.31 64 96.01 64h16v32H55.77c-6.35 0-12.74 1.53-18.04 5-13.16 8.689-17.81 24.54-12.61 38.22L56.88 224zM201 128l-36 96H91.13l-36-96H201zm41.6 300.4-18.6-9.3V408c0-13.2-10.8-24-24-24H56c-13.23 0-24 10.8-24 24v11.06l-18.58 9.344C5.266 432.3 0 440.7 0 449.9V488c0 13.2 10.77 24 24 24h208c13.2 0 24-10.8 24-24v-38.13c0-9.07-5.2-17.57-13.4-21.47zM224 480H32v-25.12l32-16.09V416h128v22.79l32 16.09V480zm272-320H304c-8.8 0-16 7.2-16 16v80c0 5.344 2.672 10.34 7.125 13.31L336 296.6V352c0 8.844 7.156 16 16 16s16-7.156 16-16v-64c0-5.344-2.672-10.34-7.125-13.31L320 247.4V192h32v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h32v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h32v55.44l-40.88 27.25C434.7 277.7 432 282.7 432 288v64c0 8.844 7.156 16 16 16s16-7.156 16-16v-55.4l40.88-27.25C509.3 266.3 512 261.3 512 256v-80c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgChess = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChess;
