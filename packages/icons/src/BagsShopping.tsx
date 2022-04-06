import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M128 96c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96v64h64c35.3 0 64 28.7 64 64h-32c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32v192c0 17.7 14.33 32 32 32h96v32H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h64V96zm32 64h128V96c0-35.35-28.7-64-64-64s-64 28.65-64 64v64zm160 192c0 35.3 28.7 64 64 64s64-28.7 64-64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 53-43 96-96 96-53.9 0-96-43-96-96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16zm-128-32c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V320zm64-32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H256z" />
  </svg>
);

const SvgBagsShopping = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBagsShopping;
