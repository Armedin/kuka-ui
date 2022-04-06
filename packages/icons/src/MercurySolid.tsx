import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 223.1c0-55.32-25.57-104.6-65.49-136.9 20.49-17.32 37.2-39.11 48.1-64.21 4.656-10.72-2.9-22.89-14.45-22.89h-54.31c-5.256 0-9.93 2.828-12.96 7.188C251.8 31.77 223.8 47.1 192 47.1c-31.85 0-59.78-16.23-76.88-40.81C112.1 2.828 107.4 0 102.2 0H47.84C36.29 0 28.73 12.17 33.39 22.89c10.9 24.21 26.71 46.9 48.1 64.22C41.57 119.4 16 168.7 16 223.1c0 86.26 62.1 157.9 144 172.1V416h-32c-8.836 0-16 7.164-16 16v32c0 8.8 7.2 16 16 16h32v16c0 8.8 7.2 16 16 16h32c8.838 0 16-7.164 16-16v-16h32c8.838 0 16-7.164 16-16v-32c0-8.836-7.162-16-16-16h-32v-19.05c81.9-15.05 144-86.65 144-173.85zM192 320c-52.93 0-96-43.07-96-96 0-52.94 43.07-95.1 96-95.1 52.94 0 96 43.06 96 95.1 0 52.9-43.1 96-96 96z" />
  </svg>
);

const SvgMercurySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMercurySolid;
