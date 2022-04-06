import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 128H352v288h128c17.62 0 32-14.38 32-32v-32c0-17.62 14.38-32 32-32s32-14.38 32-32V160c0-17.6-14.4-32-32-32zM440 360c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16v16zm0-160c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16v16zm96 0c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16v16zM336 448h-16V96h16c8.9 0 16-7.12 16-16V48c0-8.88-7.1-16-16-16h-80V16c0-8.875-7.1-16-16-16H112c-8.9 0-16 7.125-16 16v16H16C7.125 32 0 39.12 0 48v32c0 8.88 7.125 16 16 16h16v352H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 16 16h320c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16z" />
  </svg>
);

const SvgFilmCanisterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilmCanisterSolid;
