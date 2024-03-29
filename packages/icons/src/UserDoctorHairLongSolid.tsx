import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M95.1 128c0-70.69 58.2-128 128-128C294.7 0 352 57.31 352 128v10.1c0 34.8 13.5 67.4 37.5 91.4l3.9 3.9c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6H70.63c-12.5 0-23.53-10.1-23.53-22.6 0-6 3.28-11.8 7.53-16l3.88-3.9c24-24 36.59-56.6 36.59-91.4V128zm202.2-32h-2.2c-19.6 0-37.8-9.6-49.5-24.54C231.9 95.67 205.8 112 175.1 112h-29.5c-1 5.2-2.5 10.5-2.5 16v16c0 44.2 36.7 80 80 80 45.1 0 80-35.8 80-80v-16c0-11.4-1.5-22.2-5.8-32zm-10.2 266c-26.7 7.1-48 32.2-48 62v24c0 4.2 2.6 8.3 5.6 11.3l16 16c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6l-12.2-11.3V424c0-17.7 15.2-32 32-32 18.6 0 32.9 14.3 32.9 32v17.4l-11.3 11.3c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l16-16c3-3 4.7-7.1 4.7-11.3v-24c0-29.8-20.4-54.9-48-62v-38.6c73.1 15.4 128 80.2 128 157.9 0 16.9-13.8 30.7-30.7 30.7H30.72C13.75 512 0 498.2 0 481.3c0-77.7 54.89-142.5 128-157.9v46.9c-23.1 6.9-40 28.3-40 53.7 0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7V320h128l-.9 42zm-120 62c0 13.3-9.8 24-24 24-12.4 0-24-10.7-24-24s11.6-24 24-24c14.2 0 24 10.7 24 24z" />
  </svg>
);

const SvgUserDoctorHairLongSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserDoctorHairLongSolid;
