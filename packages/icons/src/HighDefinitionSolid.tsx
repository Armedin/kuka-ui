import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 208h-32v96h32c26.47 0 48-21.53 48-48s-21.5-48-48-48zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM272 328c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-64v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.2 10.8-24 24-24s24 10.8 24 24v48h64v-48c0-13.2 10.8-24 24-24s24 10.8 24 24v144zm112 24h-56c-13.25 0-24-10.75-24-24V184c0-13.2 10.8-24 24-24h56c52.94 0 96 43.06 96 96s-43.1 96-96 96z" />
  </svg>
);

const SvgHighDefinitionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHighDefinitionSolid;
