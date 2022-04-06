import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H32v16c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V64C0 28.65 28.65 0 64 0h128c35.3 0 64 28.65 64 64v432zM64 32c-17.67 0-32 14.33-32 32v32h192V64c0-17.67-14.3-32-32-32H64zm160 416V336h-24c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h24v-80H32v320h192zm0-208h-24c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v-64zm352 256c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H352v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-35.35 28.7-64 64-64h128c35.3 0 64 28.65 64 64v432zM384 32c-17.7 0-32 14.33-32 32v32h192V64c0-17.67-14.3-32-32-32H384zm160 416V336h-24c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h24v-80H352v320h192zm0-208h-24c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v-64z" />
  </svg>
);

const SvgToiletsPortable = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToiletsPortable;
