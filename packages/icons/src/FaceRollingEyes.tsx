import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 368c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h128zM80 224c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zm80 48c26.5 0 48-21.5 48-48 0-14.3-6.3-27.2-16.2-36 .1 1.3.2 2.6.2 4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-1.4.1-2.7.2-4-9.9 8.8-16.2 21.7-16.2 36 0 26.5 21.5 48 48 48zm272-48c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zm-48.2-36c.1 1.3.2 2.6.2 4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-1.4.1-2.7.2-4-9.9 8.8-16.2 21.7-16.2 36 0 26.5 21.5 48 48 48s48-21.5 48-48c0-14.3-6.3-27.2-16.2-36zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceRollingEyes = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceRollingEyes;
