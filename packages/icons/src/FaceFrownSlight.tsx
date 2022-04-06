import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 352c-43.4 0-74 21.8-91.9 42.5-5.8 6.7-15.9 7.4-22.6 1.6-6.7-5.8-7.4-15.9-1.6-22.6 22.2-25.6 61-53.5 115.2-53.5 56 0 94.7 27.9 117 53.5 5.8 6.7 5.1 16.8-1.6 22.6-6.7 5.8-16.8 5.1-22.6-1.6-18-20.7-48.5-42.5-92.8-42.5h.9zm-55.6-144c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24zm112 0c0-13.3 10.7-24 24-24 13.2 0 24 10.7 24 24s-10.8 24-24 24c-13.3 0-24-10.7-24-24zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceFrownSlight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceFrownSlight;
