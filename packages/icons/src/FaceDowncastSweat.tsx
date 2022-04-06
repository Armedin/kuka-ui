import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 101.3c0 32.5-28.72 58.7-64 58.7S0 133.8 0 101.3C0 76.27 38.07 25.81 55.47 4.101c4.26-5.468 12.8-5.468 17.06.001C90.09 25.81 128 76.27 128 101.3zM79.81 68.56c-5-7.9-10.49-15.8-15.77-23.03-5.29 7.24-10.79 15.14-15.8 23.05-5.4 8.52-9.83 16.42-12.81 23.08-2.6 5.81-3.23 8.84-3.38 9.54-.04.2-.05.2-.05.1 0 12.2 11.71 26.7 32 26.7s32-14.5 32-26.7c0 .1-.9.1-.04-.1-.15-.7-.78-3.73-3.38-9.58-2.97-6.65-7.39-14.55-12.77-23.06zm71.69-10.73c-7.8 4.13-18.4 1.14-21.6-6.67-4.2-7.81-1.2-17.49 6.6-21.62C172.2 10.67 212.9 0 256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256c0-23.6 3.202-46.5 9.204-68.3 2.356-8.5 11.166-13.5 19.676-11.1 8.52 2.3 13.52 11.1 11.17 19.7-5.24 19-8.05 39-8.05 59.7 0 123.7 100.3 224 224 224s224-100.3 224-224S379.7 32 256 32c-37.8 0-73.3 9.34-104.5 25.83zM96 272c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16zm304-16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96zM172.1 389.3c16.1-17.9 44.2-37.3 83.9-37.3s67.8 19.4 83.9 37.3c5.9 6.6 5.4 15.8-1.2 22.6-6.6 5.9-16.7 5.4-22.6-1.2-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7c-6.8 6.6-16 7.1-22.6 1.2-6.6-6.8-7.1-16-1.2-22.6z" />
  </svg>
);

const SvgFaceDowncastSweat = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceDowncastSweat;
