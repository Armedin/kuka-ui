import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M64 160c0 17.7-14.33 32-32 32S0 177.7 0 160V96C0 42.98 42.98 0 96 0h448c53 0 96 42.98 96 96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.67-14.3-32-32-32H96c-17.67 0-32 14.33-32 32v64zm64-64h384v352c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V96zm128 352c0-35.3-28.7-64-64-64v64h64zm192-64c-35.3 0-64 28.7-64 64h64v-64zm-32-112c0-44.2-43-80-96-80-53.9 0-96 35.8-96 80s42.1 80 96 80c53 0 96-35.8 96-80z" />
  </svg>
);

const SvgMoneyFromBracketSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyFromBracketSolid;
