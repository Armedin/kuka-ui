import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 128c8.8 0 16 7.2 16 16v48h24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-8.84 0-16-7.2-16-16s7.16-16 16-16h24v-48c0-8.8 7.2-16 16-16zm0 128c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zm160-128c8.8 0 16 7.2 16 16v112h24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h24V144c0-8.8 7.2-16 16-16zm0 192c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm80-288c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 32H64c-17.67 0-32 14.33-32 32v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32z" />
  </svg>
);

const SvgSquareSlidersVertical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareSlidersVertical;
