import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m128.5 58.81 147.3-39.45c38.2-10.247 78.8 4.03 102.3 35.96l55.3 75.58c25.3 2.9 47.4 20.9 54.4 47l45.6 170c4.5 16.2-5.6 34.6-22.7 39.2l-30.9 8.3c-17 4.5-34.6-5.6-39.2-22.7l-12.4-46.3L150 400.9l12.5 46.4c4.5 17-5.6 34.6-22.7 39.2l-30.9 8.2c-17.05 4.6-34.6-5.5-39.17-22.6l-45.55-170c-6.99-26.1 3.18-52.7 23.58-67.9l10.2-93.1c4.31-39.4 32.34-72.04 70.54-82.29zm16.6 61.79c-12.7 3.4-22.1 14.3-23.5 27.5l-7 63.5 249.7-66.9-37.9-51.53c-7.8-10.65-21.3-15.41-34-11.99L145.1 120.6zm-11.6 218.5c17-4.6 27.2-23 22.6-39.2-4.6-17.1-23-27.2-39.2-22.6-17.06 4.5-27.2 22.1-22.62 39.2 4.57 17 22.12 27.2 39.22 22.6zm261.6-136.4c-17.1 4.6-27.2 22.2-22.6 39.2 4.5 16.2 22.1 27.2 39.2 22.6 17-5.4 27.2-22.1 22.6-39.1-4.6-17.1-22.1-27.2-39.2-22.7zM436.9 512c-19.5 0-34.7-17.7-25.8-35.9 18.6-35.3 56.3-60.1 99.8-60.1 43.4 0 81.1 24.8 99.7 60.1 8.9 18.2-6.3 35.9-25.8 35.9H436.9z" />
  </svg>
);

const SvgCarBumpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCarBumpSolid;
