import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M385.1 477.1c-37.9 22.2-82 34.9-129.1 34.9C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256c0 36.1-7.8 72.1-22 103.9-7.3-6.3-15.9-11.8-22.6-16.8C429.6 318.7 383.6 304 352 304c-15.3 0-28.5 10.9-31.4 25.9-2.9 15.1 5.3 30.1 19.5 35.8 21 8.4 31.6 23.5 37.4 41.7 6.3 19.4 6.5 40.3 6.5 56.6 0 4.5.4 8.9 1.1 13.1zm-210-87.6c-5.9 11.1 6 20.7 19.2 16.4 18.9-6.5 39.8-10.1 61.7-10.1 22 0 42.9 3.6 61.8 10.1 12.3 4.3 25.1-5.3 18.3-16.4-16-24.7-45.3-42.4-80.1-42.4-34.7 0-64.9 17.7-80.9 42.4zm119.3-146.3c-7.1 5.3-8.5 15.3-3.2 22.4 30.4 40.5 91.2 40.5 121.6 0 5.3-7.1 3.9-17.1-3.2-22.4-7.1-5.3-17.1-3.9-22.4 3.2-17.6 23.5-52.8 23.5-70.4 0-5.3-7.1-15.3-8.5-22.4-3.2zm-99.2 3.2c-17.6 23.5-52.8 23.5-70.4 0-5.3-7.1-15.3-8.5-22.4-3.2-7.07 5.3-8.5 15.3-3.2 22.4 30.4 40.5 91.2 40.5 121.6 0 5.3-7.1 3.9-17.1-3.2-22.4-7.1-5.3-17.1-3.9-22.4 3.2zM464 512c-26.5 0-48-21.5-48-48 0-32 0-102.4-64-128 48 0 160 48 160 128 0 26.5-21.5 48-48 48z" />
  </svg>
);

const SvgFaceSleepySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSleepySolid;
