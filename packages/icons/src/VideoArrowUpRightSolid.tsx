import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M525.6 101.8 416 177.3v157.4l109.6 75.49c21.2 14.61 50.4-.29 50.4-25.79V127.5c0-25.4-29.1-40.36-50.4-25.7zM336 64H48C21.49 64 0 85.49 0 112v288c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48-48-48zm-32 216c0 13.25-10.75 23.1-24 23.1s-24-9.8-24-23.1v-54.9l-135 135c-4.7 5.6-10.8 7.9-17 7.9s-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94l135-135H168c-13.25 0-24-10.75-24-24s10.75-23.1 24-23.1h112c13.25 0 24 10.75 24 24V280z" />
  </svg>
);

const SvgVideoArrowUpRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVideoArrowUpRightSolid;
