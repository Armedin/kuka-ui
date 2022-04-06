import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-32 445.1c-36.36-6.141-69.2-22.48-95.59-46.04L224 322.6v122.5zm64-122.5 95.59 76.47C357.2 422.6 324.4 438.1 288 445.1V322.6zM64 256c0-94.95 69.34-173.8 160-189.1v173.7L88.3 349.2C72.86 321.6 64 289.8 64 256zm359.7 93.2L288 240.6V66.89C378.7 82.2 448 161.1 448 256c0 33.8-8.9 65.6-24.3 93.2z" />
  </svg>
);

const SvgPeaceSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPeaceSolid;
