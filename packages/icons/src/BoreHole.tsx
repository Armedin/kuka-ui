import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 258c27.6 7.1 48 32.2 48 62 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-29.8 20.4-54.9 48-62V16c0-8.836 7.2-16 16-16s16 7.164 16 16v242zm-16 94c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-96-224v192c0 53 42.1 96 96 96 53 0 96-43 96-96V128h96c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h96zm288 32h-64v160c0 70.7-57.3 128-128 128s-128-57.3-128-128V160H64c-17.67 0-32 14.3-32 32v256c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgBoreHole = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoreHole;
