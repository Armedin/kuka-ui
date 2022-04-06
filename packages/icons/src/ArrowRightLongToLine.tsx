import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 432c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.84 7.2-16 16-16s16 7.16 16 16v352zm-96-176c0 4.1-1.6 8.2-4.7 11.3l-144 144c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6L489.4 272H16c-8.844 0-16-7.2-16-16s7.156-16 16-16h473.4L372.7 123.3c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.26 16.4-6.26 22.6 0l144 144c3.1 3.1 4.7 7.2 4.7 11.3z" />
  </svg>
);

const SvgArrowRightLongToLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightLongToLine;
