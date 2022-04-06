import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 127.1V70.17c0-13.34 8.3-25.28 20.8-29.96l96-36.001c7.2-2.716 14.3-2.716 22.4 0l96 36.001c12.5 4.68 20.8 16.62 20.8 29.96v56.93h-.3c.2 3.5.3 6.2.3 8v40c0 71.6-57.3 128-128 128s-128-56.4-128-128v-40c0-1.8.1-4.5.28-8H96zm149.6 8.4c-13.7 24.2-39.8 39.6-69.6 39.6h-32c0 45.1 35.8 80 80 80s80-34.9 80-80v-16h-8c-20.5 0-38.7-8.7-50.4-23.6zm-32.3-82.17H200c-4.4 0-8 3.59-8 8v5.34c0 4.42 3.6 8 8 8h13.3V87.1c0 5.32 3.6 8 8 8h5.4c4.4 0 8-2.68 8-8V74.67H248c4.4 0 8-3.58 8-8v-5.34c0-4.41-3.6-8-8-8h-13.3V39.1c0-3.52-3.6-8-8-8h-5.4c-4.4 0-8 4.48-8 8v14.23zM129.1 323.2l94.9 99.9 94.9-99.9c73.6 14.9 129.1 80 129.1 158.1 0 16.9-13.8 29.8-30.7 29.8H30.72C13.75 511.1 0 498.2 0 481.3c0-78.1 55.46-143.2 129.1-158.1z" />
  </svg>
);

const SvgUserNurseHairSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserNurseHairSolid;
