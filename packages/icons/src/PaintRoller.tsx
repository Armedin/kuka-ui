import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 64v32c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h288c35.3 0 64 28.65 64 64zm-64-32H64c-17.67 0-32 14.33-32 32v32c0 17.7 14.33 32 32 32h288c17.7 0 32-14.3 32-32V64c0-17.67-14.3-32-32-32zM208 288c0-35.3 28.7-64 64-64h176c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32V64c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H272c-17.7 0-32 14.3-32 32v32c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48v-32zm32 64h-32c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgPaintRoller = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaintRoller;
