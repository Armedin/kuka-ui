import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128.3 166.1c.25-2.125 1.375-4.125 3-5.375 1.75-1.25 3.875-1.875 6-1.5l15.8 2.975c2 .25 4 1.375 5.25 3 1.25.9 1.95 3.9 1.65 6L135.9 352H400l-25-200c-4-31.1-31.25-55.1-63.5-55.1h-175c-32.25 0-59.5 24-63.5 55.1L48 352h55.5l24.8-185.9zM432 384H16c-8.875 0-16 7.1-16 16v64c0 8.9 7.125 16 16 16h416c8.875 0 16-7.125 16-16v-64c0-8.9-7.1-16-16-16z" />
  </svg>
);

const SvgSirenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSirenSolid;
