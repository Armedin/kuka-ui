import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 32H48C21.53 32 0 53.53 0 80v112a15.98 15.98 0 0 0 4.688 11.31l59.28 59.34c0 38.89 1.065 64.09-10.44 134.8-1.438 8.719 4.5 16.94 13.22 18.34 8.5 1.469 16.94-4.469 18.34-13.22C96.1 329.5 96.05 303.5 95.94 256a15.98 15.98 0 0 0-4.688-11.31L32 185.4V80c0-8.81 7.19-16 16-16h64v64c0 8.836 7.164 16 16 16s16-7.2 16-16V64h96v64c0 8.836 7.164 16 16 16s16-7.164 16-16V64h64c8.8 0 16 7.19 16 16v105.4l-59.25 59.31c-2.95 2.99-4.65 7.09-4.65 11.29-.115 48.52-.994 73.91 10.84 146.6 2.209 13.58 15.63 13.7 18.34 13.22 8.719-1.406 14.66-9.625 13.22-18.34-11.47-70.51-10.44-96.19-10.44-134.8l59.28-59.34C382.3 200.3 384 196.3 384 192V80c0-26.47-21.5-48-48-48zm0 416H47.1C21.53 448 0 469.5 0 495.1c0 9.7 7.156 16.9 16 16.9s16-7.2 16-16 7.19-16 16-16h288c8.812 0 16 7.188 16 16 0 8.844 7.156 16 16 16s16-7.156 16-16c0-26.5-21.5-48-48-48zM224 320c8.844 0 16-7.156 16-16v-64c0-26.5-21.5-48-48-48s-48 21.5-48 48v64c0 8.8 7.2 16 16 16h64zm-48-80c0-8.8 7.2-16 16-16s16 7.188 16 16v48h-32v-48z" />
  </svg>
);

const SvgChessRook = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChessRook;