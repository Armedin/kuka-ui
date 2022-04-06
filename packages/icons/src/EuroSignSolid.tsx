import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M64 240c-17.67 0-32-14.3-32-32s14.33-32 32-32h28.29C121.9 92.11 201.1 32 296 32h24c17.7 0 32 14.33 32 32s-14.3 32-32 32h-24c-57.9 0-108.2 32.4-133.9 80H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H144.2c-.1 2.6-.2 5.3-.2 8v16c0 2.7.1 5.4.2 8H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H162.1c25.7 47.6 76 80 133.9 80h24c17.7 0 32 14.3 32 32s-14.3 32-32 32h-24c-94.9 0-174.1-60.1-203.71-144H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h16.15c-.1-2.7-.15-5.3-.15-8v-16c0-2.7.05-5.3.15-8H64z" />
  </svg>
);

const SvgEuroSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEuroSignSolid;
