import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M208 32v128H0L50.73 58.53A48 48 0 0 1 93.67 32H208zm146.3 0c18.2 0 34.8 10.27 43 26.53L448 160H240V32h114.3zM0 416V192h416v.7c-89.7 8.1-160 83.5-160 175.3 0 42.5 15.1 81.6 40.2 112H64c-35.35 0-64-28.7-64-64zm576-48c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-99.3-43.3L416 385.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0z" />
  </svg>
);

const SvgBoxCircleCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxCircleCheckSolid;
