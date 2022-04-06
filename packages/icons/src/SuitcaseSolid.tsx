import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 144v288c0 25.6 22.41 48 48 48h48V96H48c-25.59 0-48 22.4-48 48zM336 0H176c-25.6 0-48 22.41-48 48v432h256V48c0-25.59-22.4-48-48-48zm0 96H176V48h160v48zm128 0h-48v384h48c25.59 0 48-22.41 48-48V144c0-25.6-22.4-48-48-48z" />
  </svg>
);

const SvgSuitcaseSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSuitcaseSolid;
