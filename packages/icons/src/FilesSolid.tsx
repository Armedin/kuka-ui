import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 0v96h96L352 0zm-32 96V0H144c-26.5 0-48 21.49-48 48v320c0 26.5 21.5 48 48 48h256c26.51 0 48-21.49 48-48V128h-96c-17.6 0-32-14.4-32-32zm8 416H120C53.83 512 0 458.2 0 392V120c0-13.2 10.75-24 24-24s24 10.8 24 24v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgFilesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilesSolid;
