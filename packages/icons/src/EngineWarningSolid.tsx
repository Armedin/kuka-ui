import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M424 88c0 13.3-10.7 24-24 24h-72v32h81.5c14.6 0 28.7 4.9 40 14l37.6 30.8c16.1 12.1 24.9 30.5 24.9 50V384c0 35.3-28.7 64-64 64H254.8c-19.5 0-37.9-8.8-50-24.9l-32-39.1H128c-17.7 0-32-14.3-32-32v-72H48v72c0 13.3-10.75 24-24 24S0 365.3 0 352V160c0-13.3 10.75-24 24-24s24 10.7 24 24v72h48v-56c0-17.7 14.3-32 32-32h152v-32h-72c-13.3 0-24-10.7-24-24 0-13.25 10.7-24 24-24h192c13.3 0 24 10.75 24 24zM324 208c0-11.9-9-20-20-20-11.9 0-20 8.1-20 20v88c0 11 8.1 20 20 20 11 0 20-9 20-20v-88zm-20 184c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm304-200c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h32z" />
  </svg>
);

const SvgEngineWarningSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEngineWarningSolid;
