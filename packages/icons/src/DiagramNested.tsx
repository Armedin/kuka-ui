import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M112 320c0 26.5 21.5 48 48 48h96v-32c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-32h-96c-44.2 0-80-35.8-80-80v-96H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-32v96zm32-256H48c-8.84 0-16 7.16-16 16v96c0 8.8 7.16 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zm144 368c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96z" />
  </svg>
);

const SvgDiagramNested = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramNested;
