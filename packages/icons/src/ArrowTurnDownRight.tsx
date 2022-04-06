import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M340.7 443.3c-6.3-6.2-6.3-16.4 0-22.6L457.4 304H80c-44.13 0-80-35.9-80-80.9V48c0-8.84 7.156-16 16-16 8.84 0 16 7.16 16 16v176c0 26.5 21.53 48 48 48h377.4L340.7 155.3c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l144 144c3.1 3.1 4.7 7.2 4.7 11.3 0 4.1-1.6 8.2-4.7 11.3l-144 144c-6.2 6.3-16.4 6.3-22.6 0z" />
  </svg>
);

const SvgArrowTurnDownRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowTurnDownRight;
