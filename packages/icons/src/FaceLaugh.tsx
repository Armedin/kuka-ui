import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M385.5 288c14.2 0 24.6 12.3 21.8 26-18.1 67.1-79 118-151.3 118-72.3 0-133.2-50.9-151.3-118-3.6-13.7 7.6-26 21.8-26h259zm-13.8 32H140.3c18.6 47.2 63.7 80 115.7 80s97.1-32.8 115.7-80zM200.4 192c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24zm112 0c0-13.3 10.7-24 24-24 13.2 0 24 10.7 24 24s-10.8 24-24 24c-13.3 0-24-10.7-24-24zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceLaugh = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceLaugh;
