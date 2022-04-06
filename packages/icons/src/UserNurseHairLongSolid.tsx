import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 127.1V70.17c0-13.34 8.3-25.28 20.8-29.96l96-36.001c7.2-2.716 14.3-2.716 22.4 0l96 36.001c12.5 4.68 20.8 16.62 20.8 29.96v56.93h-.3c.2 3.5.3 6.2.3 8v35c0 34.8 13.5 67.4 37.5 91.4l3.9 3.9c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 21.7-22.6 21.7H70.63c-12.5 0-22.63-9.2-22.63-21.7 0-6 2.38-11.8 6.63-16l3.88-3.9c24-24 37.49-56.6 37.49-91.4v-35c0-1.8.09-4.5.28-8H96zm149.6 8.4c-13.7 24.2-39.8 39.6-69.6 39.6h-32c0 45.1 35.8 80 80 80s80-34.9 80-80v-16h-8c-20.5 0-38.7-8.7-50.4-23.6zm-32.3-82.17H200c-4.4 0-8 3.58-8 8v5.34c0 4.41 3.6 8 8 8h13.3V87.1c0 5.32 3.6 8 8 8h5.4c4.4 0 8-2.68 8-8V74.67H248c4.4 0 8-3.59 8-8v-5.34c0-4.42-3.6-8-8-8h-13.3V39.1c0-3.52-3.6-8-8-8h-5.4c-4.4 0-8 4.48-8 8v14.23zm-72 282.77 82.7 87 82.7-87c78.6 3.5 141.3 68.3 141.3 147.7 0 15.6-12.6 27.3-28.2 27.3H28.16C12.61 511.1 0 499.4 0 483.8c0-79.4 62.69-144.2 141.3-147.7z" />
  </svg>
);

const SvgUserNurseHairLongSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserNurseHairLongSolid;
