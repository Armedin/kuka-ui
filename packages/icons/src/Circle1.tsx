import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm64-128h-48V144c0-5.906-3.25-11.31-8.453-14.09-5.172-2.812-11.5-2.5-16.42.781l-48 32C191.8 167.6 189.8 177.5 194.7 184.9c4.875 7.344 14.8 9.312 22.19 4.438L240 173.9V352h-48c-8.844 0-16 7.156-16 16s7.2 16 16 16h128c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgCircle1 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle1;
