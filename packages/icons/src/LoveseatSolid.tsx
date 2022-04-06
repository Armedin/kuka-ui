import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 224c-26.5 0-48 21.5-48 48v80H96v-80c0-26.5-21.49-48-48-48S0 245.5 0 272v192c0 8.8 7.164 16 16 16h64c8.84 0 16-7.2 16-16v-16h320v16c0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16V272c0-26.5-21.5-48-48-48zm-336 48v48h256v-48c0-38.63 27.53-70.95 64-78.38V160c0-70.69-57.31-128-128-128H192C121.3 32 64 89.31 64 160v33.62c36.5 7.48 64 39.78 64 78.38z" />
  </svg>
);

const SvgLoveseatSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLoveseatSolid;
