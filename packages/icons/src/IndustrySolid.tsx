import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M128 32c17.7 0 32 14.33 32 32v151.4L316.6 131c16-8.6 35.4 3 35.4 21.2v63.2L508.6 131c16-8.6 35.4 3 35.4 21.2V432c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48V64c0-17.67 14.33-32 32-32h64z" />
  </svg>
);

const SvgIndustrySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIndustrySolid;
