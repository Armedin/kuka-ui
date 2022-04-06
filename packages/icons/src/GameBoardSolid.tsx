import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 336h80v-80h-80v80zm0-160h-80v80h80v-80zM384 32H64C28.8 32 0 60.8 0 96v320c0 35.2 28.8 64 64 64h320c35.2 0 64-28.8 64-64V96c0-35.2-28.8-64-64-64zm0 144h-80v80h80v80h-80v80h-80v-80h-80v80H64v-80h80v-80H64v-80h80V96h80v80h80V96h80v80z" />
  </svg>
);

const SvgGameBoardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGameBoardSolid;
