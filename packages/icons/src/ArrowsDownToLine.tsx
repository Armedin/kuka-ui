import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 448c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h544zm-100.7-52.7c-6.2 6.3-16.4 6.3-22.6 0l-112-112c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l84.7 84.7V48c0-8.84 7.2-16 16-16s16 7.16 16 16v297.4l84.7-84.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-112 112zm-208-112-112 112c-6.2 6.3-16.4 6.3-22.6 0L4.686 283.3c-6.248-6.2-6.248-16.4 0-22.6 6.244-6.3 16.374-6.3 22.624 0l83.79 84.7V48c0-8.84 8.1-16 16-16 9.7 0 16 7.16 16 16v297.4l85.6-84.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6z" />
  </svg>
);

const SvgArrowsDownToLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsDownToLine;
