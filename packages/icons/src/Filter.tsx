import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 71.53C0 49.7 17.7 32 39.53 32H472.5c21.8 0 39.5 17.7 39.5 39.53 0 9.2-3.2 18.11-9.1 25.2L320 317.8v128.3c0 18.7-15.2 33.9-33.9 33.9-7.5 0-14.8-2.5-20.8-7.1l-60.9-47.5c-7.8-6-12.4-15.3-12.4-25.2v-82.4L9.076 96.73A39.53 39.53 0 0 1 0 71.53zM39.53 64a7.528 7.528 0 0 0-5.8 12.33L220.3 301.8c2.4 2.9 3.7 6.5 3.7 10.2v88.2l60.1 47.4c1.2.3 1.6.4 2 .4 1.1 0 1.9-.8 1.9-1.9V312c0-3.7 1.3-7.3 3.7-10.2L478.3 76.33c1.1-1.35 1.7-3.05 1.7-4.8 0-4.16-3.4-7.53-7.5-7.53H39.53z" />
  </svg>
);

const SvgFilter = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilter;
