import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM32 256C32 132.5 132.5 32 256 32c57.34 0 104 46.66 104 104s-46.7 104-104 104c-75 0-136 61-136 136 0 26.46 7.904 50.97 21.02 71.88C75.84 408.7 32 337.5 32 256zm224 224c-57.34 0-104-46.66-104-104s46.7-104 104-104c75 0 136-61 136-136 0-26.46-7.904-50.97-21.02-71.88C436.2 103.3 480 174.5 480 256c0 123.5-100.5 224-224 224zm0-320c13.26 0 24-10.75 24-24s-10.7-24-24-24c-13.25 0-24 10.75-24 24s10.7 24 24 24zm0 192c-13.25 0-24 10.75-24 24s10.7 24 24 24c13.26 0 24-10.75 24-24s-10.7-24-24-24z" />
  </svg>
);

const SvgYinYang = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgYinYang;
