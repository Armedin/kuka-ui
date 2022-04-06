import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 256C0 167.6 71.63 96 160 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96C71.63 416 0 344.4 0 256zm480 160h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c53 0 96-43 96-96 0-53.9-43-96-96-96h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c88.4 0 160 71.6 160 160s-71.6 160-160 160zm-64-192c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h192z" />
  </svg>
);

const SvgLinkSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLinkSimpleSolid;
