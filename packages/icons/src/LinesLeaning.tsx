import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M30.93 469.7c-3.17 7.4-12.43 12.4-20.68 9.2-8.245-3.1-12.359-12.4-9.187-20.6L161.1 42.25c3.1-8.24 12.4-12.36 20.6-9.19 7.4 3.18 12.4 12.43 9.2 20.68L30.93 469.7zM275.6 32.41c8.6 1.98 14 10.57 12 19.18l-96 416.01c-2 8.6-10.6 14-19.2 12s-14-10.6-12-19.2l96-416c2-8.61 9.7-13.98 19.2-11.99zm91.5-1.31c9.7 0 16 8.06 16 16v416c0 9.7-6.3 16-16 16-7.9 0-16-6.3-16-16v-416c0-7.94 8.1-16 16-16z" />
  </svg>
);

const SvgLinesLeaning = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLinesLeaning;
