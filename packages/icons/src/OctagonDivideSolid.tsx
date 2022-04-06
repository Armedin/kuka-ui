import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M140.6 21.15A71.962 71.962 0 0 1 191.5.063h129c19.1 0 37.4 7.585 50.9 21.087L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.983 71.983 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.15 371.4A71.975 71.975 0 0 1 .067 320.5v-129c0-19.1 7.585-37.4 21.083-50.9L140.6 21.15zM256 191.1c17.7 0 32-13.4 32-32 0-16.8-14.3-32-32-32s-32 15.2-32 32c0 18.6 14.3 32 32 32zm-88 40c-13.3 0-24 11.6-24 24 0 14.2 10.7 24 24 24h176c13.3 0 24-9.8 24-24 0-12.4-10.7-24-24-24H168zm88 88c-17.7 0-32 15.2-32 32 0 18.6 14.3 32 32 32s32-13.4 32-32c0-16.8-14.3-32-32-32z" />
  </svg>
);

const SvgOctagonDivideSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOctagonDivideSolid;
