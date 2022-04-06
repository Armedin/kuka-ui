import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M104 56c0-30.93 25.1-56 56-56s56 25.07 56 56-25.1 56-56 56-56-25.07-56-56zm56 24c13.3 0 24-10.75 24-24s-10.7-24-24-24-24 10.75-24 24 10.7 24 24 24zm1.9 48.1c36.7 2 67.5 28.7 74.3 65.2l6.1 32.4c44.3 8.6 77.7 47.5 77.7 94.3v32c0 17.7-14.3 32-32 32h-64v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384h-64v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384c-17.67 0-32-14.3-32-32V232.1l-33.89 63.4c-4.16 7.8-13.86 10.8-21.65 6.6-7.794-4.2-10.737-13.8-6.573-21.6L56.21 178.8c16.69-31.3 49.29-51.7 84.69-51.7h18.2c1.6 0 2.2.9 2.8 1zM288 352v-32c0-31.1-22.3-57.1-51.7-62.8l-21.4-4.2-10.1-53.8c-4.3-22.7-24.1-39.2-47.2-39.2H144c-26.5 0-48 21.5-48 48v144h192z" />
  </svg>
);

const SvgPersonPregnant = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonPregnant;
