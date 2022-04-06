import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M464 448H96c-35.35 0-64-28.65-64-64V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v272c0 53.02 42.98 96 96 96h368c8.836 0 16-7.164 16-16s-7.2-16-16-16zm48-416H160c-35.3 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h352c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM192 352h-32c-17.64 0-32-14.36-32-32v-32h64v64zm0-96h-64v-96h64v96zm0-128h-64V96c0-17.64 14.36-32 32-32h32v64zm256 224H224V224h224v128zm0-160H224V64h224v128zm96 128c0 17.64-14.36 32-32 32h-32v-64h64v32zm0-64h-64v-96h64v96zm0-128h-64V64h32c17.64 0 32 14.36 32 32v32z" />
  </svg>
);

const SvgFilms = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilms;
