import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M333.4 122.7 301.8 224h60.7c11.9 0 21.5 9.6 21.5 21.5 0 6.1-2.6 11.9-7.1 16L212 410.7c-3.7 3.4-8.7 5.3-13.8 5.3-13.9 0-23.8-13.5-19.6-26.7L210.2 288h-61.3c-11.5 0-20.9-9.4-20.9-20.9 0-5.9 2.5-11.5 6.8-15.5l165.1-150.2c3.8-3.49 8.7-5.4 13.9-5.4 13.9 0 23.8 13.5 19.6 26.7zM232 256c5.1 0 9.9 2.4 12.9 6.5s3.9 9.4 2.4 14.3l-25.7 82.1L335.3 256H280c-5.1 0-9.9-2.4-12.9-6.5s-3.9-9.4-2.4-14.3l25.6-81.8L177.5 256H232zm280 0c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgCircleBolt = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleBolt;
