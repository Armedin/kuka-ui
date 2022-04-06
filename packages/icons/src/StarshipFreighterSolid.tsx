import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M176 256c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm48 224C100.3 480 0 379.7 0 256S100.3 32 224 32c42.3 0 84.2 7.87 123.6 23.2l208 80.9c12.3 4.7 20.4 16.6 20.4 29.8v41.2c0 9.7-7.2 16-16 16H432c-8.8 0-16 8.1-16 16v32c0 9.7 7.2 16 16 16h128c8.8 0 16 8.1 16 16v43c0 13.2-8.1 25.1-20.4 29.8l-82.1 32c4.1 6.2 6.5 15.3 6.5 24.1 0 26.5-21.5 48-48 48h-80c-11.5 0-21.6-6.1-27.3-15.2C292.2 474.9 258.2 480 224 480zm0-144c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zM80 272c8.84 0 16-7.2 16-16s-7.16-16-16-16-16 7.2-16 16 7.16 16 16 16zm32-128c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 224c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z" />
  </svg>
);

const SvgStarshipFreighterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarshipFreighterSolid;
