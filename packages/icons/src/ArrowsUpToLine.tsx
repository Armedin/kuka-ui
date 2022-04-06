import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M16 64C7.164 64 0 56.84 0 48s7.164-16 16-16h544c8.8 0 16 7.16 16 16s-7.2 16-16 16H16zm100.7 52.7c6.2-6.3 16.4-6.3 22.6 0l112 112c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L144 166.6V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V166.6l-84.69 84.7c-6.24 6.3-16.37 6.3-22.624 0-6.248-6.2-6.248-16.4 0-22.6l112.014-112zm208 112 112-112c6.2-6.3 16.4-6.3 22.6 0l112 112c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L464 166.6V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V166.6l-84.7 84.7c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6z" />
  </svg>
);

const SvgArrowsUpToLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsUpToLine;
