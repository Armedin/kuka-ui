import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 480c-14.6 19.4-37.8 32-64 32-29.6 0-55.5-16.1-69.3-40.9-.9 0-1.8.9-2.7.9-48.6 0-88-39.4-88-88 0-7.6.97-15 2.79-22.9C13.56 344.4 0 317.8 0 288c0-25.1 9.646-48 25.4-65.9-.92-4-1.4-9-1.4-14.1 0-29.6 16.12-55.5 40.04-69.3-.03-.9-.04-1.8-.04-2.7 0-33.6 20.73-62.37 50.1-74.21C122.3 26.37 154.1 0 192 0c26.2 0 49.4 12.57 64 31.99C270.6 12.57 293.8 0 320 0c37.9 0 69.7 26.37 77.9 61.79C427.3 73.63 448 102.4 448 136c0 .9-.9 1.8-.9 2.7 24.8 13.8 40.9 39.7 40.9 69.3 0 5.1-.5 10.1-1.4 14.1C502.4 240 512 262.9 512 288c0 29.8-13.6 56.4-34.8 73.1 1.8 7.9 2.8 15.3 2.8 22.9 0 48.6-39.4 88-88 88-.9 0-1.8-.9-2.7-.9-13.8 24.8-39.7 40.9-69.3 40.9-26.2 0-49.4-12.6-64-32zM143.2 86.69l-11 2.77C111.4 94.71 96 113.6 96 136c0 3.1.3 6.2.87 9.2l2.54 13.1-12.54 4.8C68.79 170 55.1 187.6 55.1 208c0 5.2 1.74 10.3 3.27 14.1l3.28 10-7.91 7.8c-13.36 11.8-22.64 29-22.64 48.1 0 22.9 12.91 43 31.06 54.3l11.59 7.3-5.33 12.6c-2.84 6.6-5.32 14-5.32 21.8 0 30.9 25.97 56 56 56 4.2 0 7.4-.3 10.4-.8l13-3.1 4.7 13.1c6.9 18.1 24.4 30.8 43.9 30.8 27.4 0 48-21.5 48-48V80c0-26.51-20.6-48-48-48-24.1 0-44.6 19.08-46.9 43.44l-1 11.25zM272 432c0 26.5 21.5 48 48 48 20.4 0 37.9-12.8 44.8-30.8l4.7-13.1 13 3.1c3 .5 6.2.8 9.5.8 30.9 0 56-25.1 56-56 0-7.8-1.6-15.2-4.4-21.8l-5.4-12.6 11.6-7.3c17.3-11.3 30.2-31.4 30.2-55.2 0-18.2-8.4-35.4-21.7-47.2l-8-7.8 3.3-10c1.6-3.8 2.4-8.9 2.4-15 0-19.5-12.8-37.1-30.9-44l-12.5-4.8 2.5-13.1c.6-3 .9-6.1.9-10.1 0-21.5-15.4-40.39-36.2-45.64l-11-2.77-1-11.25c-2.3-24.36-23.7-44.34-48.7-44.34-25.6 0-48 22.39-48 48L272 432z" />
  </svg>
);

const SvgBrain = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBrain;
