import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M531.8 271.1 55.16 33.68c-7.922-3.938-17.5-.734-21.47 7.156-3.96 7.914-.75 17.524 7.15 21.474L492.2 287.1H64c-35.35 0-64 28.65-64 64v64C0 451.3 28.65 480 64 480h448c35.35 0 64-28.65 64-64v-72.45c0-30.45-16.9-57.85-44.2-72.45zm12.2 144c0 18.5-14.4 32.9-32 32.9H64c-17.64 0-32-14.36-32-32v-64c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v63.1zm-448-56c-13.26 0-24 10.75-24 24 0 13.26 10.74 24 24 24 13.25 0 24-10.74 24-24 0-12.4-10.7-24-24-24zm96 0c-13.26 0-24 10.75-24 24 0 13.26 10.74 24 24 24 13.25 0 24-10.74 24-24 0-12.4-10.7-24-24-24z" />
  </svg>
);

const SvgScanner = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScanner;
