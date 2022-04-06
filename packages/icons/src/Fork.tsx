import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M294.4 162.7c-.7-2-1.1-4.1-1-6.2.2-2.1.7-4.2.7-6.1 1.8-1.9 3-3.6 4.6-5L417.5 37.98c3.1-2.84 7.3-4.32 11.5-4.11 4.3.21 8.3 2.1 11.1 5.25 2 3.15 4.3 7.3 4.1 11.54-.2 4.24-2.1 8.22-6.1 11.07L320.2 169.2c-1.5 1.4-3.4 2.5-5.3 3.2-2 .7-4.1 1-6.2.9-2.1-.1-4.2-.6-6.1-1.5-1.9-.9-3.6-2.2-5-3.8-1.4-1.5-2.5-3.3-3.2-5.3zm45.8 46.7c-.9-1.9-1.4-4-1.5-6.1-.1-2.1.2-4.2.9-6.2.7-1.9 1.8-3.8 3.2-5.3L450.3 73.02c2.8-3.14 6.8-5.03 11.1-5.24 4.2-.21 8.3 1.27 11.5 4.12 3.1 2.86 5 6.84 5.2 11.08.2 4.25-1.2 8.4-4.1 11.55L366.6 213.3c-1.5 1.5-3.2 2.8-5.1 3.7-1.9.9-3.9 1.4-6 1.5-2.1.1-4.2-.2-6.2-.9s-3.8-1.8-5.4-3.2c-1.5-2.3-2.8-3.1-3.7-5zm171.6-90.9c.7 4.2-.3 7.6-2.7 11.9l-83.5 116c-7 11.3-16.4 20.9-28.5 28-10.3 7.2-23 11.6-36.2 13.1-3.2.3-6.4.5-9.6.5-24.5-.1-48-9.6-65.5-26.7l-6.2-6.2L27.49 507.2c-3.02 2.9-7.06 4.5-11.26 4.5-4.19 0-8.206-2.6-11.173-4.7-2.966-3-4.649-7-4.685-11.2-.037-4.2 1.576-8.2 4.491-11.2L257 232.5l-6.1-6.1c-9.6-9.9-17.8-21.7-21.4-34.7-4.6-13-6.2-26.8-4.8-40.5 1.5-13.3 6-26.1 12.4-37.4 8.1-11.3 17.8-20.81 29.2-27.78L381.5 3.008C384.1.53 389.2-.476 393.4.211c4.2.687 8 3.011 10.5 6.461 2.4 3.448 3.4 7.748 2.8 11.938-1.6 4.19-3.1 7.94-6.5 10.41l-116 83.48c-7.7 4.3-14.1 10.4-19 17.8-4.8 7.3-7.9 15.6-8.9 24.4-.9 8.9.1 17.9 3.1 26.4 2.9 8.5 7.7 16.2 13.9 22.7l16.7 16.7.9.6c.2.2.3.5.5.8l16.8 16.8c6.5 5.4 14.2 11.1 22.7 14 8.5 2.9 17.6 3.9 26.5 2.9 7.7-.9 16.8-3.9 24-8.6 7.2-4.7 13.3-11 17.6-18.4l83.9-116.8c1.3-1.7 2.8-3.1 4.6-4.2 1.8-1.2 3.8-1.9 5.9-2.2 2.1-.4 4.2-.3 6.2.2 2.1.5 4 .5 5.7 2.6 3.5 2.5 5.8 6.2 6.5 10.3z" />
  </svg>
);

const SvgFork = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFork;