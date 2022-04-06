import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm192 64h288V96c0-17.67-14.3-32-32-32H192v96zm-32-96H64c-17.67 0-32 14.33-32 32v64h128V64zM32 192v128h128V192H32zm0 160v64c0 17.7 14.33 32 32 32h96v-96H32zm160 96h256c17.7 0 32-14.3 32-32v-64H192v96zm288-128V192H192v128h288z" />
  </svg>
);

const SvgTableList = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTableList;
