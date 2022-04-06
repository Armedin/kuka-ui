import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm80-192h-16v-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H183.6l55.23-138.1c3.281-8.188-.719-17.5-8.922-20.78-8.108-3.22-17.508.68-20.808 8.98l-64 160c-1.9 4.9-1.3 10.5 1.7 14 2.9 5.3 7.9 7.9 13.2 7.9h128v48c0 8.844 7.156 16 16 16s16-7.156 16-16v-48h16c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgCircle4 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle4;
