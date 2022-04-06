import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 288c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80zm-40 64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zM416 80c0 8.84-7.2 16-16 16h-80v32h76.6c12.7 0 25 3.7 35.5 10.7l51.4 34.3c17.8 11.9 28.5 31.9 28.5 53.3V384c0 35.3-28.7 64-64 64H254.8c-19.5 0-37.9-8.8-50-24.9l-32-39.1H144c-26.5 0-48-21.5-48-48v-64H32v80c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V160c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v80h64v-64c0-26.5 21.5-48 48-48h144V96h-80c-8.8 0-16-7.16-16-16s7.2-16 16-16h192c8.8 0 16 7.16 16 16zm-272 80c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h44.2l41.6 51.1c6 8.5 15.2 12.9 25 12.9H448c17.7 0 32-14.3 32-32V226.3c0-10.7-5.3-20.7-14.2-26.7l-51.4-34.2c-5.3-3.5-11.5-5.4-17.8-5.4H144zm400 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V224zm32 192h32V224h-32v192z" />
  </svg>
);

const SvgEngineWarning = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEngineWarning;
