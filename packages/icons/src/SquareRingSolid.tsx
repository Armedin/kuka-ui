import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 160c-53.9 0-96 42.1-96 96s42.98 96 96 96 96-42.98 96-96-43-96-96-96zM384 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zM224 416c-88.35 0-160-71.65-160-160S135.65 96 224 96s160 71.65 160 160-71.6 160-160 160z" />
  </svg>
);

const SvgSquareRingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareRingSolid;
