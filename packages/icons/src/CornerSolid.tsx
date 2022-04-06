import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 384c-17.69 0-32-14.31-32-32V224H32c-17.69 0-32-14.3-32-32s14.31-32 32-32h384c17.69 0 32 14.31 32 32v160c0 17.7-14.3 32-32 32z" />
  </svg>
);

const SvgCornerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCornerSolid;
