import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M492.7 58.75c25 24.99 25 65.55 0 90.55l-52.1 52.1-130-129.97 52.1-52.11c25-24.998 65.6-24.998 90.6 0l39.4 39.43zM240.1 114.9c-8.5-9.4-23.7-9.4-33.1 0L104.1 216.1c-8.5 10.2-23.7 10.2-33.07 0-9.37-8.5-9.37-23.7 0-33.1L173.1 80.97c28.1-28.12 73.7-28.12 101.8 0L417.9 224 229.5 412.5c-48 48-109.2 80.7-175.8 94l-24.99 5c-7.87 1.6-16.01-.9-21.68-7.4-5.674-4.8-8.137-12.9-6.564-20.8l4.999-25C18.78 391.7 51.52 330.5 99.54 282.5L254.1 128l-14-13.1z" />
  </svg>
);

const SvgPenClipSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenClipSolid;
