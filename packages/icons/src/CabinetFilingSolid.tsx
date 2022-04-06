import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 464c0 26.4 21.6 48 48 48h352c26.4 0 48-21.6 48-48V272H0v192zm128-96c0-8.9 7.1-16 16-16h160c8.875 0 16 7.125 16 16v40c0 4.375-3.625 8-8 8h-16c-4.4 0-8-3.6-8-8v-24H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-40zM400 0H48C21.6 0 0 21.6 0 48v192h448V48c0-26.4-21.6-48-48-48zm-80 152c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-24H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-40c0-8.9 7.1-16 16-16h160c8.9 0 16 7.1 16 16v40z" />
  </svg>
);

const SvgCabinetFilingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCabinetFilingSolid;
