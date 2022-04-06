import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M470.6 425.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-13.3-12.4c-42.5 33.7-96.9 53.8-157 53.8-58.3 0-112.7-20.1-156.08-53.8l-12.39 12.4c-12.5 12.5-32.76 12.5-45.26 0-12.49-12.5-12.49-32.7 0-45.2l12.39-13.3C20.07 369.6 0 315.2 0 255.1c0-58.3 20.07-112.7 53.76-156.08L41.37 86.63c-12.49-12.5-12.49-32.76 0-45.26 12.5-12.49 32.76-12.49 45.26 0l12.39 12.39C142.4 20.07 196.8 0 255.1 0c60.1 0 114.5 20.07 157 53.76l13.3-12.39c12.5-12.49 32.7-12.49 45.2 0 12.5 12.5 12.5 32.76 0 45.26l-12.4 12.39C491.9 142.4 512 196.8 512 255.1c0 60.1-20.1 114.5-53.8 157l12.4 13.3zm-161.3-70.9c-15.9 8.6-34 13.5-54.2 13.5-18.4 0-36.5-4.9-52.4-13.5l-57.9 58c31.3 22.4 69.7 35.5 110.3 35.5 42.4 0 80.8-13.1 112.1-35.5l-57.9-58zM448 255.1c0-40.6-13.1-79-35.5-110.3l-58 57.9c8.6 15.9 13.5 34 13.5 53.3 0 19.3-4.9 37.4-13.5 53.3l58 57.9C434.9 335.9 448 297.5 448 256v-.9zm-192.9-192c-40.6 0-79 14.04-110.3 36.4l57.9 58c15.9-8.6 34-14.4 52.4-14.4 20.2 0 38.3 5.8 54.2 14.4l57.9-58C335.9 77.14 297.5 63.1 256 63.1h-.9zm-97.6 246.2c-8.6-15.9-14.4-34-14.4-54.2 0-18.4 5.8-36.5 14.4-52.4l-58-57.9c-22.36 31.3-36.4 69.7-36.4 110.3 0 42.4 14.04 80.8 36.4 112.1l58-57.9zm97.6-102.2c-25.6 0-48 22.4-48 48 0 27.4 22.4 48 48 48 27.4 0 48.9-20.6 48.9-48 0-25.6-21.5-48-48.9-48z" />
  </svg>
);

const SvgLifeRingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLifeRingSolid;
