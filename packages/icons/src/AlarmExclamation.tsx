import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M92.19 0c24.21 0 46.21 9.345 62.71 24.59 6.5 6.01 6.8 16.14.8 22.61-6 6.48-16.1 6.86-22.6.85C122.4 38.08 108 32 92.19 32 58.95 32 32 58.95 32 92.19c0 11.91 3.44 23.01 9.38 32.31 4.75 7.4 2.56 17.3-4.89 22.1-7.46 4.7-17.35 2.5-22.09-4.9C5.28 127.4 0 110.4 0 92.19 0 41.28 41.28 0 92.19 0zM357.1 24.59C373.6 9.345 395.6 0 419.8 0 470.7 0 512 41.28 512 92.19c0 18.21-5.3 35.21-14.4 49.51-4.7 7.4-15.5 9.6-22.1 4.9-7.4-4.8-9.6-14.7-4.9-22.1 6-9.3 9.4-20.4 9.4-32.31C480 58.95 453 32 419.8 32c-16.7 0-30.2 6.08-40.9 16.05-6.5 6.01-16.6 5.63-22.6-.85-6-6.47-5.7-16.6.8-22.61zM255.1 160c9.7 0 16.9 7.2 16.9 16v144c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16V176c0-8.8 8.1-16 16-16zM280 384c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24s11.6-24 24-24c14.2 0 24.9 10.7 24.9 24zM36.69 507.3c-6.25-6.2-6.25-16.4 0-22.6l50.01-50C52.62 395.4 32 344.1 32 287.1c0-122.8 100.3-224 224-224s224 101.2 224 224c0 57-20.6 108.3-54.7 147.6l50 50c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-50-50C363.4 491.4 312.1 512 256 512c-56.1 0-107.4-20.6-146.7-54.7l-49.99 50c-6.24 6.3-16.38 6.3-22.62 0zM255.1 480C362 480 448 394 448 288c0-106.9-86-192-192.9-192-106 0-192 85.1-192 192 0 106 86 192 192 192z" />
  </svg>
);

const SvgAlarmExclamation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlarmExclamation;
