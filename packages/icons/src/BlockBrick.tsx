import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm136 32h176V64H136v64zm-32-64H64c-17.67 0-32 14.33-32 32v32h72V64zm-72 96v80h176v-80H32zm72 192v-80H32v80h72zm-72 32v32c0 17.7 14.33 32 32 32h144v-64H32zm104-32h176v-80H136v80zm280 0v-80h-72v80h72zm0 32H240v64h144c17.7 0 32-14.3 32-32v-32zM240 160v80h176v-80H240zm176-32V96c0-17.67-14.3-32-32-32h-40v64h72z" />
  </svg>
);

const SvgBlockBrick = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlockBrick;
