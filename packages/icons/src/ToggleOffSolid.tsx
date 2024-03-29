import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M192 352c-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96zm192 96H192C85.96 448 0 362 0 256 0 149.1 85.96 64 192 64h192c106 0 192 85.1 192 192 0 106-86 192-192 192zm0-320H192c-70.7 0-128 57.3-128 128s57.3 128 128 128h192c70.7 0 128-57.3 128-128s-57.3-128-128-128z" />
  </svg>
);

const SvgToggleOffSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToggleOffSolid;
