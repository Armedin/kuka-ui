import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m336 160.4-128-.4c-8.8 0-16 7.1-16 15.1-.9 9.7 7.1 16 15.1 16.9l89.15.273-132.4 132.4c-6.25 6.25-6.25 16.38 0 22.62C167.8 350.4 171.9 352 176 352s8.188-1.562 11.31-4.688L320 214.6V304c0 8.844 7.156 16 16 16s16-7.2 16-16V176.4c0-8.8-7.1-16-16-16zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleArrowUpRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowUpRight;
