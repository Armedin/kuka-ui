import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-118.6-95.5 35.67-50.39c5.094-7.219 3.406-17.2-3.812-22.31-7.188-5.062-17.16-3.375-22.31 3.812l-31.89 45.06-50.36-53.7 27.19-21.91C264.7 211.1 272 196.2 272 180.3c0-28.9-24.1-52.3-53.6-52.3h-20.8c-29.5 0-53.6 23.4-53.6 52.3 0 15.3 5.875 29.91 16.47 41.05l17.25 18.41-42.62 33.64c-14.4 11.8-23.1 29.5-23.1 48.5 0 34.2 28.7 62.1 63.9 62.1h36.28c25.28 0 48.88-12.06 63.16-32.28l3.217-4.545 29.81 31.78A15.99 15.99 0 0 0 320 384c3.938 0 7.844-1.438 10.94-4.328 6.469-6.047 6.781-16.17.719-22.62L297.4 320.5zM176 180.3c0-11.2 9.7-20.3 21.6-20.3h20.75c11.95 0 21.65 9.1 21.65 20.3 0 6.031-2.844 11.72-8 15.75l-29.3 23.55-19-20.25c-4.9-5.25-7.7-12.05-7.7-19.05zm73.2 152.9c0 .1 0 0 0 0-8.3 10.9-22.1 18.8-37 18.8h-36.3c-17.6 0-31.9-13.5-31.9-30.1 0-9.031 4.219-17.52 11.81-23.42l43.89-35.38 56.5 60.24-7 9.86z" />
  </svg>
);

const SvgSquareAmpersand = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareAmpersand;