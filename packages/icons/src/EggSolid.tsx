import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 16C86 16 0 198 0 304s85.1 192 192 192c105.1 0 192-85.1 192-192 0-106-86.9-288-192-288zm-31.9 122C128.6 177.1 96 249.8 96 304c0 8.8-7.16 16-16 16s-16-7.2-16-16c0-63.56 36.7-143.3 71.22-186 5.562-6.906 15.64-7.969 22.5-2.406C164.6 121.1 165.7 131.2 160.1 138z" />
  </svg>
);

const SvgEggSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEggSolid;
