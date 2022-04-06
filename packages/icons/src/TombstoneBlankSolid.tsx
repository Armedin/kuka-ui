import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M415.1 191.1C415.1 86 329.1 0 223.1 0S32 86 32 192v224h384l-.9-224.9zM432 448H16c-8.875 0-16 7.125-16 16v31.1c0 8.875 7.125 16 16 16h416c8.875 0 16-7.125 16-16V464c0-8.9-7.1-16-16-16z" />
  </svg>
);

const SvgTombstoneBlankSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTombstoneBlankSolid;
