import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm0-352c-52.9 0-96 43.1-96 96 0 49.72 38.12 90.24 86.6 95.05l-48.19 36.14c-7.062 5.312-8.5 15.34-3.219 22.41C198.3 381.8 203.2 384 208 384a15.93 15.93 0 0 0 9.594-3.188l89.59-67.22C348.8 282.4 352 234.3 352 224c0-52.9-43.1-96-96-96zm0 160c-35.3 0-64-28.7-64-64 0-35.35 28.65-64 64-64s64 28.65 64 64c0 35.3-28.7 64-64 64z" />
  </svg>
);

const SvgCircle9 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle9;
