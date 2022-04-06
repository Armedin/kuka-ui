import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 32c26.5 0 48 21.49 48 48v160c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96zm256 192c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48h96zM0 400c0-26.5 21.49-48 48-48h96c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-32zM400 32c26.5 0 48 21.49 48 48v32c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h96z" />
  </svg>
);

const SvgObjectsColumnSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsColumnSolid;
