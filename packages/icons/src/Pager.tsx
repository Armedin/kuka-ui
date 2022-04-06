import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 352h64c8.844 0 16-7.156 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16zm-128 0h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.84 0-16 7.2-16 16s7.16 16 16 16zM448 64H64C28.63 64 0 92.63 0 128v256c0 35.38 28.62 64 64 64h384c35.38 0 64-28.62 64-64V128c0-35.37-28.6-64-64-64zm32 320c0 17.62-14.38 32-32 32H64c-17.62 0-32-14.38-32-32V256h448v128zm0-160H32v-96c0-17.62 14.38-32 32-32h384c17.62 0 32 14.38 32 32v96z" />
  </svg>
);

const SvgPager = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPager;
