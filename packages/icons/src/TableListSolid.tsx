import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm64 64h64V96H64v64zm384-64H192v64h256V96zM64 288h64v-64H64v64zm384-64H192v64h256v-64zM64 416h64v-64H64v64zm384-64H192v64h256v-64z" />
  </svg>
);

const SvgTableListSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTableListSolid;
