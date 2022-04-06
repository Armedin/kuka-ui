import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 224v-16c0-26.5-21.5-48-48-48H191.1l.9-48c0-26.47 21.5-48 48-48h160c8.8 0 16-7.16 16-16s-7.2-16-16-16H240c-44.1 0-80 35.88-80 80v48h-16c-26.5 0-48 21.5-48 48l-.9 16c-53.02 0-96 42.98-96 96v64c0 53.02 42.98 96 96 96h384c53.02 0 96-42.98 96-96v-64c.9-53.9-42.1-96-95.1-96zm-352-16c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v16H128v-16zm-32 48h384c35.29 0 64 28.71 64 64v16H32v-16c0-35.3 28.71-64 64-64zm384 192H96c-35.29 0-64-28.71-64-64v-16h512v16c0 35.3-28.7 64-64 64z" />
  </svg>
);

const SvgCurlingStone = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCurlingStone;
