import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 448h-80V50.75C480 22.75 458.5 0 432 0H144c-26.5 0-48 22.75-48 50.75V448H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 16 16h544c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16zM384 288c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgDoorClosedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDoorClosedSolid;