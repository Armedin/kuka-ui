import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M222.4 176H176v160h46.41c44.99 0 81.59-35.9 81.59-80s-36.6-80-81.6-80zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM222.4 384H152c-13.2 0-24-10.7-24-24V152c0-13.2 10.8-24 24-24h70.41C293.9 128 352 185.4 352 256s-58.1 128-129.6 128z" />
  </svg>
);

const SvgSquareDSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareDSolid;
