import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="m139.3 4.688 112 112C254.4 119.8 256 123.9 256 128s-1.562 8.188-4.688 11.31c-6.25 6.25-16.38 6.25-22.62 0L144 54.63v402.8l84.69-84.69c6.25-6.25 16.38-6.25 22.62 0C254.4 375.8 256 379.9 256 384s-1.562 8.188-4.688 11.31l-112 112c-6.25 6.25-16.38 6.25-22.62 0l-112-112c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L112 457.4V54.63L27.31 139.3c-6.25 6.25-16.38 6.25-22.62 0s-6.25-16.38 0-22.62l112-112c6.21-6.242 16.41-6.242 22.61.008z" />
  </svg>
);

const SvgArrowsUpDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsUpDown;
