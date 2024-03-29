import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 320c65.25 0 118.5-49 126.4-112H97.63C105.5 271 158.8 320 224 320zM88 176h272c4.375 0 8-3.625 8-8v-32c0-4.375-3.625-8-8-8h-8c0-45-26.88-85.62-68.38-103.2L256 80V16c0-8.875-7.125-16-16-16h-32c-8.875 0-16 7.125-16 16v64l-27.6-55.25C122.9 42.38 96 83 96 128h-8c-4.375 0-8 3.625-8 8v31.1c0 5.3 3.63 8.9 8 8.9zm226.7 176H133.3C59.7 352 0 411.7 0 485.3c0 14.73 11.94 26.67 26.66 26.67H421.3c14.72 0 26.66-11.94 26.66-26.67C448 411.7 388.3 352 314.7 352z" />
  </svg>
);

const SvgUserHelmetSafetySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserHelmetSafetySolid;
