import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512H413.3c19.2 0 34.7-15.5 34.7-34.7 0-95.7-77.6-173.3-173.3-173.3zm138.6 176H34.66c-1.46 0-2.66-1.2-2.66-2.7C32 399.4 95.4 336 173.3 336h101.3c78 0 141.4 63.4 141.4 141.3 0 1.5-1.2 2.7-2.7 2.7zM224 272c70.59 0 128-57.42 128-128V24c0-11.89-12.52-19.63-23.16-14.31L288 30.11 231.16 1.69a15.987 15.987 0 0 0-14.31 0L160 30.11 119.2 9.689C108.5 4.369 96 12.11 96 24v120c0 70.6 57.4 128 128 128zM128 49.86l32 16 64-32 64 32 32-16V112H128V49.86zM320 144c0 52.94-43.06 96-96 96s-96-43.06-96-96h192z" />
  </svg>
);

const SvgUserCrown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserCrown;
