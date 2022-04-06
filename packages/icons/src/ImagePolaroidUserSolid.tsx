import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 256c35.35 0 64-28.66 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64zM400 32H48C21.6 32 0 53.6 0 80v352c0 26.4 21.6 48 48 48h352c26.4 0 48-21.6 48-48V80c0-26.4-21.6-48-48-48zm-16 320h-48c0-35.35-28.65-64-63.1-64h-97.8c-34.4 0-63.1 28.7-63.1 63.1l-48 .9V96h320v256z" />
  </svg>
);

const SvgImagePolaroidUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImagePolaroidUserSolid;
