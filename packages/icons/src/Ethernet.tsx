import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 192h-32v-32c0-17.67-14.33-32-32-32h-32V96c0-17.67-14.33-32-32-32H160c-17.7 0-32 14.33-32 32v32H96c-17.67 0-32 14.3-32 32v32H32c-17.67 0-32 14.3-32 32v192c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V224c0-17.7-14.3-32-32-32zm0 224h-64v-80c0-8.844-7.156-16-16-16s-16 7.2-16 16v80h-64v-80c0-8.844-7.156-16-16-16s-16 7.2-16 16v80h-64v-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v80h-64v-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H32V224h64v-64h64V96h192v64h64v64h64v192z" />
  </svg>
);

const SvgEthernet = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEthernet;
