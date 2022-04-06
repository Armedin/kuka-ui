import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M352 336c0 8.875-7.125 16-16 16h-96c-8.9 0-16-7.1-16-16v-48h-96v192h320V288h-96v48zM0 128v128h96V32C43 32 0 75 0 128zm0 320c0 17.62 14.38 32 32 32h64V288H0v160zM480 32v224h96V128c0-53-43-96-96-96zM304 304v-64c0-8.9-7.1-16-16-16s-16 7.1-16 16v64c0 8.9 7.1 16 16 16s16-7.1 16-16zm176 176h64c17.62 0 32-14.38 32-32V288h-96v192zM128 256h96v-48c0-8.9 7.1-16 16-16h96c8.9 0 16 7.1 16 16v48h96V32H128v224z" />
  </svg>
);

const SvgTreasureChestSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTreasureChestSolid;
