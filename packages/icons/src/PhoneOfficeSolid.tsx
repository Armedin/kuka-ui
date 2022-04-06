import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M128 416h64c17.62 0 32-14.38 32-32V32c0-17.62-14.38-32-32-32h-64c-17.6 0-32 14.38-32 32v352c0 17.6 14.4 32 32 32zM528 32H256v352c0 35.25-28.75 64-64 64h-64c-35.25 0-64-28.75-64-64V32H48C21.5 32 0 53.5 0 80v384c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM384 432c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-32c0-8.875 7.125-16 16-16h32c8.875 0 16 7.125 16 16v32zm0-128c0 8.875-7.125 16-16 16h-32c-8.9 0-16-7.1-16-16v-32c0-8.9 7.1-16 16-16h32c8.9 0 16 7.1 16 16v32zm128 128c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-32c0-8.875 7.125-16 16-16h32c8.875 0 16 7.125 16 16v32zm0-128c0 8.875-7.125 16-16 16h-32c-8.9 0-16-7.1-16-16v-32c0-8.9 7.1-16 16-16h32c8.9 0 16 7.1 16 16v32zm0-112H320V96h192v96z" />
  </svg>
);

const SvgPhoneOfficeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPhoneOfficeSolid;
