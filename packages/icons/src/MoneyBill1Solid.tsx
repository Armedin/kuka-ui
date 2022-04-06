import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M252 208c0-11.9 8.1-20 20-20h16c11 0 20 8.1 20 20v68h4c11 0 20 8.1 20 20 0 11-9 20-20 20h-48c-11.9 0-20-9-20-20 0-11.9 8.1-20 20-20h4v-48.4c-9.1-1.9-16-9.9-16-19.6zM512 64c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448zM128 384c0-35.3-28.65-64-64-64v64h64zM64 192c35.35 0 64-28.7 64-64H64v64zm448 192v-64c-35.3 0-64 28.7-64 64h64zm0-256h-64c0 35.3 28.7 64 64 64v-64zm-224 16c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112z" />
  </svg>
);

const SvgMoneyBill1Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyBill1Solid;
