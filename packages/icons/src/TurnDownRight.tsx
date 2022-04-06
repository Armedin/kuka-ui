import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M366.4 414c-8.7-3.8-14.4-12.5-14.4-22v-88.9H80c-44.13 0-80-35-80-80V48c0-8.84 7.156-16 16-16 8.84 0 16 7.16 16 16v175.1c0 27.4 21.53 48 48 48h272V184c0-9.5 5.7-18.2 14.4-22 8.8-3.8 18.9-2.1 25.9 4.4l112 104c5.1 4.8 7.7 11.2 7.7 16.7 0 7.3-2.6 13.7-7.7 18.5l-112 104c-7 6.5-17.1 8.2-25.9 4.4zm17.6-40.3 92.2-85.7-92.2-85.7v171.4z" />
  </svg>
);

const SvgTurnDownRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurnDownRight;
