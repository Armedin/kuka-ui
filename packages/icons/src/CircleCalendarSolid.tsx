import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zM208 96c-8.8 0-16 7.2-16 16v16h-32c-17.7 0-32 14.3-32 32v32h256v-32c0-17.7-14.3-32-32-32h-32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64v-16c0-8.8-7.2-16-16-16zm-48 288h192c17.7 0 32-14.3 32-32V224H128v128c0 17.7 14.3 32 32 32z" />
  </svg>
);

const SvgCircleCalendarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleCalendarSolid;
