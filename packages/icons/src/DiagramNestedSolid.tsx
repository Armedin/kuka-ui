import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 80c0-26.51 21.49-48 48-48h96c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-16v96c0 17.7 14.3 32 32 32h96v-16c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-16h-96c-53.9 0-96-43-96-96v-96H48c-26.51 0-48-21.5-48-48V80z" />
  </svg>
);

const SvgDiagramNestedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramNestedSolid;
