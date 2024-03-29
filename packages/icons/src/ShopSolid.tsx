import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 155.2c0-7.3 2.153-14.4 6.188-20.5L81.75 21.37A47.957 47.957 0 0 1 121.7 0h396.6c16.1 0 31 8.021 39.9 21.37l75.6 113.33c4 6.1 6.2 13.2 6.2 20.5 0 20.3-16.5 36.8-36.8 36.8H36.84C16.5 192 0 175.5 0 155.2zM64 224h64v160h192V224h64v240c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48V224zm448 0h64v256c0 17.7-14.3 32-32 32s-32-14.3-32-32V224z" />
  </svg>
);

const SvgShopSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShopSolid;
