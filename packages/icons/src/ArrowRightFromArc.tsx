import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 480c8.8 0 16 7.2 16 16s-7.2 16-16 16C114.6 512 0 397.4 0 256S114.6 0 256 0c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16C132.3 32 32 132.3 32 256s100.3 224 224 224zm250.6-236c3.4 3.1 5.4 7.4 5.4 12s-2 8.9-5.4 11.1l-144 128c-6.6 6.7-16.7 6.1-22.6-.5-5.8-6.6-5.2-16.7 1.4-22.6l112.5-100.9H175.1c-7.9 0-16-6.3-16-16 0-7.9 8.1-16 16-16h278.8l-112.5-100c-6.6-5-7.2-16-1.4-21.7 5.9-6.6 16-7.2 22.6-1.4l144 128z" />
  </svg>
);

const SvgArrowRightFromArc = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightFromArc;
