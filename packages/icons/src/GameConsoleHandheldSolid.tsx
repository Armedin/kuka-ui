import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48C21.6 0 0 21.6 0 48v368c0 52.8 43.2 96 96 96h192c53.02 0 95.1-42.98 96-96V48c0-26.4-21.6-48-48-48zM160 336c0 8.8-7.2 16-16 16h-16v16c0 8.8-7.2 16-15.1 16-8.8 0-16-7.2-16-15.1L96 352H80c-8.8 0-15.1-7.2-15.1-16s6.3-16 15.1-16h15.1v-16c.9-8.8 8.1-16 16.9-16 8.8 0 15.1 7.2 15.1 16v16h16c9.7 0 16.9 7.2 16.9 16zm72 48c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24zM128 224c-17.67 0-32-14.33-32-32V80c0-8.837 7.163-16 16-16h159.1c8.837 0 16 7.163 16 16v112c0 17.6-14.4 32-32 32H128zm168 112c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24z" />
  </svg>
);

const SvgGameConsoleHandheldSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGameConsoleHandheldSolid;
