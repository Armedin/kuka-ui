import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M16 64c8.84 0 16 7.16 16 16v352c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V80c0-8.84 7.164-16 16-16zm203.3 84.7c6.3 6.2 6.3 16.4 0 22.6L150.6 240h338.8l-68.7-68.7c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l96 96c6.3 6.2 6.3 16.4 0 22.6l-96 96c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l68.7-68.7H150.6l68.7 68.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-96-96c-6.26-6.2-6.26-16.4 0-22.6l96-96c6.2-6.3 16.4-6.3 22.6 0zM640 432c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.84 7.2-16 16-16s16 7.16 16 16v352z" />
  </svg>
);

const SvgArrowsLeftRightToLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsLeftRightToLine;
