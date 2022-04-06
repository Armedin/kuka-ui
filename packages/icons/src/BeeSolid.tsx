import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M448 95.1c-27.69 0-55.34 9.471-80.73 22.73.125-1.49 5.114-31.79-19.72-59.7l31.71-31.71c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-34.99 34.99C312.3 35.27 302.1 31.1 288 31.1s-24.3 4.17-33.7 8.58l-35-34.992c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L228.4 58.99c-24.9 27.91-19.8 58.21-19.7 59.71-25.4-13.2-53-23.6-80.7-23.6-70.66 0-128 51-128 112 0 58.42 51.31 105.9 116.5 111-.7-6-1.3-11.2-1.3-17.3 0-15.6 2.5-30.7 6.7-45.3-31.94-2.4-57.9-23-57.9-48.4 0-26 29.31-47.1 63.1-47.1 22.86 0 49.72 12.52 74.81 29.37C169.2 215.1 147.2 255.2 147.2 300.8 147.2 406.4 288 512 288 512s140.8-105.6 140.8-211.2c.016-45.58-21.1-85.69-55.59-111.4C398.3 172.5 425.1 160 448 160c34.66 0 64 22 64 48 0 24.52-25.96 45.11-57.86 47.52 4.17 14.57 6.668 29.68 6.662 45.29 0 6.094-.625 12.15-1.344 18.18C524.7 313.9 576 266.5 576 208c0-61.8-57.3-112.9-128-112.9zM233.7 246.5c14.5-15.4 33.7-22.5 54.2-22.5s39.89 7.986 54.38 22.49c3.02 2.91 5.52 6.21 7.82 9.51H225.9c2.3-3.3 4.8-6.6 7.8-9.5zM288 427.1c-13.1-12.8-26.6-27.6-38.6-43.1h77.23c-12.03 15.5-25.53 30.3-38.63 43.1zm68.2-91.1H219.8c-4.801-11.07-7.746-21.84-8.271-32h152.8c-.429 10.2-4.229 20.9-8.129 32z" />
  </svg>
);

const SvgBeeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBeeSolid;
