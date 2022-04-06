import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 80c0-8.84 7.16-16 16-16h96c8.8 0 16 7.16 16 16s-7.2 16-16 16H80c-8.84 0-16-7.16-16-16zm256 0c0-8.84 7.2-16 16-16h96c8.8 0 16 7.16 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.16-16-16zm48 128c8.8 0 16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16zm-176 48c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.84 0-16-7.2-16-16s7.16-16 16-16h96zM0 192c0-35.3 28.65-64 64-64h384c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192zm32 0v192c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32z" />
  </svg>
);

const SvgCarBattery = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCarBattery;
