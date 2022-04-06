import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M328.7 38.37c9.6-4.1 20.2-6.37 31.3-6.37 33.7 0 62.5 20.82 74.3 50.28h6.8c39.2 0 70.9 31.72 70.9 70.82 0 39.2-31.7 70-70.9 70H134.9c-39.18 0-71.8-30.8-71.8-70 0-39.1 32.62-70.82 71.8-70.82h11.4C156.3 35.27 198 0 247.1 0c33.5 0 62.5 14.98 81.6 38.37zM160.2 114.3h-25.3c-21.5 0-39.8 17.4-39.8 38.8 0 21.5 18.3 38 39.8 38h306.2c21.5 0 38.9-16.5 38.9-38 0-21.4-17.4-38.8-38.9-38.8h-18.6c-7.5 0-14-5.3-15.6-12.6C402.2 80.14 382.1 64 360 64c-10.1 0-19.4 3.11-27.2 8.41-3.6 2.51-8.1 3.4-12.5 2.45-4.3-.96-8-3.66-10.3-7.48C297.4 46.17 274.4 32 247.1 32c-37.3 0-68.5 29.74-71 67.31-.5 8.39-7.5 14.99-15.9 14.99zM77.31 376.9c-4.9 7.3-14.83 9.3-22.19 4.4-7.35-4.9-9.33-14.8-4.43-22.2l64.01-96c4.9-7.3 14.8-9.3 22.2-4.4 7.3 4.9 9.3 14.8 4.4 22.2l-63.99 96zm172.79 81.9c9.8-6.7 18.1-14 26-21.9 6.5-6.5 17.2-6.5 23.7 0 8 7.9 15.3 15.2 26 21.9 16.5 11.2 37.3 20.3 57.3 20.3 21.8 0 42.5-9.1 59.1-20.3 9.7-6.7 18-14 25.9-21.9 6.5-6.5 17.2-6.5 23.7 0 8 7.9 15.3 15.2 26 21.9 12.8 8.7 28.1 16.6 44.1 19.8 7.7 1.5 14.1 7.8 14.1 15.6 0 9.8-8.9 17.9-17.7 16.2-23.1-3.9-43.6-15-58.5-25.2-8-5.4-14.7-10.8-20.7-16.1-4.3 5.3-11 10.7-18.9 16.1-18.7 12.7-45.9 25.9-77.1 25.9-29.4 0-56.7-13.2-75.3-25.9-8-5.4-14.7-10.8-20.7-16.1-4.3 5.3-11 10.7-18.9 16.1-18.7 12.7-45.9 25.9-77.1 25.9-29.4 0-56.7-13.2-75.3-25.9-8-5.4-14.7-10.8-19.84-16.1-5.14 5.3-11.84 10.7-19.77 16.1-14.94 10.2-35.38 21.3-58.5 25.2C8.015 512.1 0 504 0 494.2c0-7.8 6.421-14.1 14.13-15.6 15.94-3.2 31.25-11.1 44.03-19.8 9.78-6.7 18-14 25.91-21.9 6.57-6.5 17.23-6.5 23.73 0 8 7.9 16.3 15.3 26 21.9 16.5 11.2 37.3 20.3 57.3 20.3 21.8 0 42.5-9.1 59-20.3zm222.8-200.1c7.3 4.9 9.3 14.8 4.4 22.2l-64 96c-4.9 7.3-14.8 9.3-22.2 4.4-7.3-4.9-9.3-14.8-4.4-22.2l64-96c4.9-7.3 14.8-9.3 22.2-4.4zM189.3 376.9c-4.9 7.3-14.8 9.3-22.2 4.4-7.3-4.9-9.3-14.8-4.4-22.2l64-96c4.9-7.3 14.8-9.3 22.2-4.4 7.3 4.9 9.3 14.8 4.4 22.2l-64 96zm171.6-118.2c7.3 4.9 9.3 14.8 4.4 22.2l-64 96c-4.9 7.3-14.8 9.3-22.2 4.4-7.3-4.9-9.3-14.8-4.4-22.2l64-96c4.9-7.3 14.8-9.3 22.2-4.4z" />
  </svg>
);

const SvgCloudShowersWater = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudShowersWater;
