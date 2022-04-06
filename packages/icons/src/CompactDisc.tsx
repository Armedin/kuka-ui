import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 232c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.7 24-24-10.8-24-24-24zm16-136c0-8.844-7.156-15.91-16-15.91-97.05 0-176 78.88-176 175.9 0 8.844 7.156 16 16 16s16-7.19 16-15.99c0-79.41 64.59-144 144-144 8.8 0 16-7.2 16-16zm-16 63.1c-53.02 0-96 43-96 96s42.98 95.1 96 95.1 96-43 96-95.1-43-96-96-96zm0 160.9c-35.33 0-64-28.75-64-64s28.67-64 64-64 64 28.75 64 64-28.7 64-64 64zm0-320C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCompactDisc = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCompactDisc;
