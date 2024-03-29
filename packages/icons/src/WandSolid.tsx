import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M376.3 191.1 97.1 500.6c-12.25 13.5-33.38 14.13-46.37 1.133l-41.4-41.41c-12.1-12.1-12.35-34.09 1.145-46.34l117.5-106V271.1c0-8.874 7.124-16 15.1-16h42.62l279.1-251.8c6.374-5.75 15.1-5.5 22.12.625l19.5 19.37c5.999 6.125 6.249 15.75.5 22.12L415.1 147.1v28c0 8.874-7.124 16-15.1 16h-23.7z" />
  </svg>
);

const SvgWandSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWandSolid;
