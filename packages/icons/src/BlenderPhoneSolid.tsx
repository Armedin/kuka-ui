import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m158.7 334.1-26.6-62.4c-1.9-7.6-8.9-11-16.4-10.2l-45 4.374c-17.25-46.87-17.63-99.74 0-147.6l45 4.374c7.5.752 14.5-3.548 16.4-10.248l25.75-63.25c4.05-7.39.25-15.89-5.75-20.14L112.9 4.887C98.49-3.863 80.12-.489 68.99 12.01c-92.63 103.59-92 259.49 2 362.49 9.875 10.75 29.13 12.5 41.75 4.75l39.38-24.12c5.98-4.23 9.58-12.73 6.58-21.03zM479.1 384H224c-35.38 0-63.1 28.62-63.1 63.1l-.005 32c0 17.62 14.37 31.1 31.1 31.1L511.1 512c17.63 0 32-14.38 32-31.1l.002-31.1C543.1 412.6 515.4 384 479.1 384zM352 480c-17.63 0-31.1-14.38-31.1-31.1 0-17.62 14.37-31.1 31.1-31.1s31.1 14.38 31.1 31.1c.9 16.7-13.5 31.1-31.1 31.1zm47.1-416h158.5L576 .008 191.1.006l-.002 351.1h288l17.49-64h-97.49c-8.801 0-16-7.199-16-15.1 0-8.799 7.199-15.1 16-15.1h106.1l17.49-63.1h-123.6c-8.801 0-16-7.199-16-15.1 0-8.799 7.199-15.1 16-15.1h132.4l17.49-63.1h-149.9c-8.801 0-16-7.199-16-15.1C383.1 71.2 391.2 64 399.1 64z" />
  </svg>
);

const SvgBlenderPhoneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlenderPhoneSolid;
