import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 96c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h16v-16c0-8.8 7.2-16 16-16zm-48 96h192v-16c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v16zm0 32v112c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V224H160zm352 32c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgCircleCalendar = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleCalendar;
