import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 64c0-17.67 14.33-32 32-32h80c79.5 0 144 64.47 144 144 0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6-16.4 6.6-35-1.4-41.6-17.8l-56-139.9H64v128c0 17.7-14.33 32-32 32S0 465.7 0 448V64zm64 192h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64v160zm256.8 26.2c.5 1.1 1.4 2.6 4.2 4.9 7.2 5.7 18.7 10 37.9 16.7l1.3.5c16.1 4.8 38.7 13.6 54.9 28.1 10.4 8.1 18.8 18.6 23.9 32.3 5.1 13.7 6.1 28.5 3.8 44-4.1 28.1-20.4 48.4-43.7 60.9-22.1 11.1-48.2 12.5-73.2 8l-.2-.1c-9.3-1.7-20.5-5.7-29.2-8.9-6.1-2.3-12.6-4.9-17.8-7-2.5-1-4.6-1.8-6.3-2.5-16.5-6.4-24.6-24.9-18.2-41.4 6.4-16.5 24.9-24.6 41.4-18.2 2.6 1 5.2 2 7.9 3.1 4.8 1.9 9.9 3.9 15.4 6 8.8 3.3 15.3 4.5 18.7 6 15.6 2.9 26.7.9 32.9-2.2 4.9-2.5 8-6.1 9-13.1 1-6.9.2-10.5-.4-12.2-.7-1.7-1.8-3.6-4.5-5.9-6.9-5.8-18.2-10.4-37-17l-3-1.1c-15.5-5.4-37-12.9-53.3-25.9-9.5-7.5-19.2-17.5-23.8-30.9-5.4-13.5-6.6-28.1-4.3-43.2 8.4-58 67-78 116.9-68.9 6 1.3 27.3 5.8 35.4 8.4 16.9 5.2 26.3 23.1 21.1 40-5.3 16.9-23.2 26.3-40.1 21.1-4.7-1.5-22.3-5.5-27.9-6.5-15.5-2.7-25.8-.4-33.5 3.2-5.4 3.3-8 6.7-8.6 12-.9 6-.1 8.8.3 9.8z" />
  </svg>
);

const SvgRupeeSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRupeeSignSolid;
