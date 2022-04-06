import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 480c-17.69 0-32-14.31-32-32V224c0-70.59-57.41-128-128-128S64 153.41 64 224v223.1c0 17.69-14.31 32-32 32s-32-14.31-32-32V224C0 118.1 86.13 32 192 32s192 86.13 192 192v224c0 17.7-14.3 32-32 32z" />
  </svg>
);

const SvgIntersectionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIntersectionSolid;
