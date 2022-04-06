import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64C28.62 0 0 28.62 0 64v384c0 35.38 28.62 64 64 64h256c35.38 0 64-28.62 64-64V64c0-35.38-28.6-64-64-64zM192 32c8.875 0 16 7.125 16 16s-7.1 16-16 16-16-7.12-16-16 7.1-16 16-16zm0 448c-8.875 0-16-7.125-16-16s7.1-16 16-16 16 7.125 16 16-7.1 16-16 16zm96-112.9c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V272h192v95.1zm0-127.1H96v-96.9c0-26.5 21.5-47.1 48-47.1h96c26.5 0 48 21.5 48 47.1V240z" />
  </svg>
);

const SvgLightSwitchSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLightSwitchSolid;
