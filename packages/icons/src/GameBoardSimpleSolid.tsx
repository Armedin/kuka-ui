import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.8 32 0 60.8 0 96v320c0 35.2 28.8 64 64 64h320c35.2 0 64-28.8 64-64V96c0-35.2-28.8-64-64-64zm0 224H224v160H64V256h160V96h160v160z" />
  </svg>
);

const SvgGameBoardSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGameBoardSimpleSolid;
