import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M88 272c0-8.8 7.16-16 16-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.84 0-16-7.2-16-16v-64zm72 56v-48h-48v48h48zm8-200c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.84 0-16-7.2-16-16v-64c0-8.8 7.16-16 16-16h64zm-56 24v20h20v-20h-20zm28 0v20h20v-20h-20zm0 28v20h20v-20h-20zm-8 20v-20h-20v20h20zm68-56c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64zm44 56v-20h-20v20h20zm8 0h20v-20h-20v20zm0-28h20v-20h-20v20zm-8-20h-20v20h20v-20zM208 32h80c17.7 0 32 14.33 32 32v.8c18.3 3.71 32 19.85 32 39.2v376h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16V104c0-19.35 13.74-35.49 32-39.2V64c0-17.67 14.33-32 32-32h80V16c0-8.836 7.2-16 16-16s16 7.164 16 16v16zm104 64h-8c-8.8 0-16-7.16-16-16V64H96v16c0 8.84-7.16 16-16 16h-8c-4.42 0-8 3.58-8 8v376h256V104c0-4.42-3.6-8-8-8z" />
  </svg>
);

const SvgPoliceBox = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPoliceBox;
