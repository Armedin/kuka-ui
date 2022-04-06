import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M366.7 1.443C376 .666 384 8.027 384 17.39V47.1c0 9.74-7.2 16-16 16H216.1C203.2 63.1 192 52.81 192 39c0-13.9 9.1-23.83 22.9-24.91L366.7 1.443zM208 111.1c0-4.6.6-9.9 1.6-16h156.8c1.1 6.1 1.6 11.4 1.6 16 0 45.1-35.8 80-80 80s-80-34.9-80-80zm105.2 112c14.4 0 28.4 3.2 41.7 7.4L192 393.4v-90.3H40.01c-22.09 0-40.002-17-40.002-40 0-21.2 17.912-40 40.002-40H313.2zm117.1 67.7 76.1 128.9c11.3 19 5 43.5-14 54.7-19.1 11.3-43.6 5-54.8-14.1L384 369.7V416H214.6l171.1-171.1c18 11.4 33.4 27 44.6 45.9zM384 448v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-32h192z" />
  </svg>
);

const SvgPersonMilitaryPointingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonMilitaryPointingSolid;
