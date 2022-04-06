import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm0-296c13.25 0 24-10.74 24-24 0-13.25-10.75-24-24-24s-24 10.7-24 24 10.7 24 24 24zm48 168h-32V240c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v96h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgCircleInfo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleInfo;
