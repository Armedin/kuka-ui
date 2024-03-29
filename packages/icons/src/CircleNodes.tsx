import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M365.8 357.7c29.4 11.8 50.2 40.6 50.2 74.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-14.4 3.8-27.9 10.5-39.6l-138-120.7C115 281.9 98.22 288 80 288c-44.18 0-80-35.8-80-80s35.82-80 80-80c27.9 0 52.5 14.3 66.8 36l174.5-69.74c-.9-4.63-1.3-9.39-1.3-14.26 0-44.18 35.8-80 80-80s80 35.82 80 80c0 43.6-34.9 79.1-78.3 79.1l-35.9 198.6zm10.4-236c7 4 15.1 5.4 23.8 5.4 2.6 0 5.2.7 7.6.3 22.9-3.7 40.4-23.5 40.4-47.4 0-26.51-21.5-48-48-48s-48 21.49-48 48v1.95c.5 11.37 4.9 21.75 11.9 29.75 3.5 3.9 7.6 7.3 12.3 10zm-6 32.6c-16.1-6.1-28.1-16.8-37-31.2l-174.5 70.6c.9 4.7 1.3 9.4 1.3 14.3 0 14.4-3.8 27.9-10.5 39.6l138 120.7c13.1-9.9 29.2-15.9 46.8-16.3l35.9-197.7zm-248.5 77.5c4-7 6.3-15.1 6.3-23.8 0-26.5-21.5-48-48-48-26.51 0-48 21.5-48 48s21.49 48 48 48c8.55 0 16.58-2.2 23.5-6.2 6.6-3.6 12.1-8.8 16.3-15 .7-1 1.3-2 1.9-3zm169.7 182.4c-2.2 5.5-3.4 11.5-3.4 17.8 0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48c-14.1 0-26.7 6.1-35.5 15.7-3.1 3.4-5.7 6.4-7.8 11.5-.4 1-.9 2-1.3 3z" />
  </svg>
);

const SvgCircleNodes = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleNodes;
