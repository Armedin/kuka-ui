import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448.2 34.34c-1.3 19.7 5.5 39.84 20.5 54.91l55.5 55.85c9.2 9.2 21.1 14.2 33.2 14.8 12 29.7 18.6 62.1 18.6 96.1 0 37.4-8.9 73-22.5 105.1-27-15.3-61.9-11.3-84.8 11.8-25.9 26-27.5 67-4.9 94.9-41 27.9-90.5 44.2-143.8 44.2-61.3 0-117.6-21.6-161.7-57.6l13-13.1c27.6-27.7 27.6-72.6 0-100.4-24.8-25.8-63.6-27.5-91.26-7.6-1.7-1.3-3.45-2.4-5.23-3.5C67.78 306.5 64 281.7 64 256 64 114.6 178.6 0 320 0c46.7 0 90.5 12.5 128.2 34.34zM203.9 346.5c22.3 25.6 61 53.5 116.1 53.5 55.1 0 93.8-27.9 116.1-53.5 5.8-6.7 5.1-16.8-1.6-22.6-6.7-5.8-16.8-5.1-22.6 1.6-18.8 20.7-48.5 42.5-91.9 42.5-43.4 0-74-21.8-91.9-42.5-5.8-6.7-15.9-7.4-22.6-1.6-6.7 5.8-7.4 15.9-1.6 22.6zm.9-112.9c17.6-23.5 52.8-23.5 70.4 0 5.3 7.1 15.3 8.5 22.4 3.2 7.1-5.3 8.5-15.3 3.2-22.4-30.4-40.5-91.2-40.5-121.6 0-5.3 7.1-3.9 17.1 3.2 22.4 7.1 5.3 17.1 3.9 22.4-3.2zm252.8 3.2c7.1-5.3 8.5-15.3 3.2-22.4-30.4-40.5-91.2-40.5-121.6 0-5.3 7.1-3.9 17.1 3.2 22.4 7.1 5.3 17.1 3.9 22.4-3.2 17.6-23.5 52.8-23.5 70.4 0 5.3 7.1 15.3 8.5 22.4 3.2zM573.7 11.5c15.2-15.257 39.8-15.257 54.9 0 15.2 15.26 15.2 39.99 0 55.25l-55.4 55.75c-7.3 7.3-19.1 7.3-26.3 0l-55.5-55.81c-15.2-15.26-15.2-39.99 0-55.25 15.1-15.254 39.7-15.254 54.9 0L560 25.27l13.7-13.77zm54.9 439.2-55.4 55.8c-7.3 7.3-19.1 7.3-26.3 0l-55.5-55.8c-15.2-15.3-15.2-40 0-55.3 15.1-15.2 39.7-15.2 54.9 0l13.7 13.9 13.7-13.8c15.2-15.3 39.8-15.3 54.9 0 15.2 15.3 15.2 40 0 55.2zM93.71 363.5c15.19-15.3 39.79-15.3 54.89 0 15.2 15.3 15.2 40 0 55.2l-55.4 55.8c-7.27 7.3-19.07 7.3-26.34 0l-55.49-55.8c-15.161-15.3-15.161-40 0-55.3 15.17-15.2 39.75-15.2 54.92 0l13.74 13.9 13.68-13.8z" />
  </svg>
);

const SvgFaceSmileHeartsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSmileHeartsSolid;
