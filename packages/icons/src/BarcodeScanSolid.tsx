import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M104 32c13.3 0 24 10.75 24 24v136H64V56c0-13.25 10.75-24 24-24h16zM64 456V320h64v136c0 13.3-10.7 24-24 24H88c-13.25 0-24-10.7-24-24zm96 8V320h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm64-8V320h64v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm0-400c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24v136h-64V56zm96 400V320h64v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm0-400c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24v136h-64V56zm128 408V320h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm16-432c8.8 0 16 7.16 16 16v144h-32V48c0-8.84 7.2-16 16-16zm48 424V320h64v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm0-400c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24v136h-64V56zm-352-8c0-8.84 7.2-16 16-16s16 7.16 16 16v144h-32V48zm456 184c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h592z" />
  </svg>
);

const SvgBarcodeScanSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBarcodeScanSolid;
