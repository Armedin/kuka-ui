import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm312.9 118.9a16.4 16.4 0 0 1-17.8 0l-12.5-8.4c-16.1-10.7-37.1-10.7-53.2 0l-12.5 8.4a16.4 16.4 0 0 1-17.8 0l-14.8-10.8c-15.2-8.7-32.7-9.8-48.1-3l-15.4 8.6c-7.9 3.9-11.1 13.6-7.1 21.5 3.9 7.9 13.6 11.1 21.5 7.1l15.3-7.7c5.2-2.6 11.3-2.2 16.1 1l14.8 9.9c16.1 10.7 37.1 10.7 53.2 0l12.5-8.4a16.4 16.4 0 0 1 17.8 0l12.5 8.4c16.1 10.7 37.1 10.7 53.2 0l14.8-9.9c4.8-3.2 10.9-3.6 16.1-1l15.3 7.7c7.9 4 17.6.8 21.5-7.1 4-7.9.8-17.6-7.1-21.5l-15.4-8.6c-15.4-6.8-33.8-5.7-48.1 3l-14.8 10.8zM153.4 100c-59.87 2.4-106.47 56.7-100.96 110.5 2.86 53.9 53.66 94.3 102.46 89 49.1-2.9 86-47.9 80.6-91.2-3.3-43.4-44.7-74.4-82.9-69.2-38.4 3.4-65.69 39.1-60.3 72.1 3.84 33 35.9 54.5 63.6 49.2 27.7-4.1 45.4-30.8 39.5-53.6-2.4-11.5-9.5-19.9-17.8-25.7-8.1-3.8-18.3-5.7-27.5-2.4-8.9 2.7-14.9 8.9-17.8 15.9-2.6 6.3-3.1 15 1.8 21.8 4.3 6.3 11.1 9.2 17.7 8.5 5.2-.6 15.1-5.3 14.1-16.4-.3-2.7-1.4-5.1-3-7 .8.3 1.6.7 2.6 1.2 3.1 1.8 5.6 4.9 5.6 9.2l1 .4.1.3c2 7.7-4.8 22-19.9 24.1h-.4l-.3.1c-14 2.8-33.3-9.1-35.5-28.6v-.3l-.1-.4c-3.1-18.3 13.2-42.4 38.9-45.4l.4.8h.3c24.7-3.5 53.8 17.7 56 47.5v.7c3.8 28.8-22.1 62.5-58.4 64.5h-.3l-.3.1c-35.4 3.9-74.22-26.5-76.21-67.6l-.01.5-.04-.3c-4.19-39.4 31.16-82.4 78.06-85.2 6.6.6 11.8-5 11.5-11.6-.3-6.6-5.8-11.76-12.5-11.5zm204.2 192c-7.5.3-11.8 5.9-11.5 12.5.3 6.6 5.8 11.8 12.5 10.6 59.9-1.5 106.5-55.8 101-109.6-2.9-53.9-53.7-94.3-102.5-89-50 2.9-86 47.9-80.6 91.2 3.3 43.4 44.7 74.4 82.9 69.2 38.4-3.4 65.7-39.1 60.3-72.1-3.8-33-35.9-54.5-63.6-49.2-27.7 4.1-45.4 30.8-39.5 53.6 1.5 11.5 9.5 19.9 17.8 24.8 8.1 4.7 18.3 6.6 27.5 3.3 8.9-2.7 14.9-8.9 17.8-15.9 2.6-6.3 3.1-15-1.8-21.8-4.3-6.3-11.1-9.2-17.7-8.5-6.1.6-15.1 5.3-14.1 16.4.3 2.7 1.4 5.1 3 7-.8-.3-1.6-.7-2.6-1.2-3.1-1.8-5.6-4.9-6.5-9.2l-.1-.4-.1-.3c-2-7.7 4.8-22 19.9-24.1h.4l.3-.1c14-2.8 33.3 9.1 35.5 28.6v.3l-.8.4c4 18.3-12.3 42.4-38 44.5l-.4.1h-.3c-24.7 3.5-53.8-17.7-56-47.5v-.7c-3.8-28.8 22.1-62.5 58.4-64.5h.3l.3-.1c35.4-3.9 74.2 26.5 76.2 66.7v.4l.1.3c4.1 39.4-31.2 82.4-78.1 84.3z" />
  </svg>
);

const SvgFaceSpiralEyesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSpiralEyesSolid;