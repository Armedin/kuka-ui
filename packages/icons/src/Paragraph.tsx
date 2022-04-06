import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 32H191.1c-43.4 0-85.7 18.38-115.98 50.75C44.87 115 29.37 158.5 32.37 202.6c5.5 85 79.83 149.4 165.13 149.4H256v112c0 8.799 7.199 16 16 16s16-7.201 16-16V64h64v400c0 8.799 7.199 16 16 16s16-7.201 16-16V64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16zM255.1 320h-64c-70.75 0-128-57.25-128-128s57.25-128 128-128h64v256z" />
  </svg>
);

const SvgParagraph = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgParagraph;
