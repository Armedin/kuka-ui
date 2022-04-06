import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 256c0-123.7-100.3-224-224-224-8.8 0-16-7.16-16-16 0-8.836 7.2-16 16-16 141.4 0 256 114.6 256 256S397.4 512 256 512c-8.8 0-16-7.2-16-16s7.2-16 16-16c123.7 0 224-100.3 224-224zm-133.4-12c3.4 3.1 5.4 7.4 5.4 12s-2 8.9-5.4 11.1l-144 128c-6.6 6.7-16.7 6.1-22.6-.5-5.8-6.6-5.2-16.7 1.4-22.6l112.5-100.9H16c-8.836 0-16-6.3-16-16 0-7.9 7.164-16 16-16h277.9l-112.5-100c-6.6-5-7.2-16-1.4-21.7 5.9-6.6 16-7.2 22.6-1.4l144 128z" />
  </svg>
);

const SvgArrowRightToArc = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightToArc;
