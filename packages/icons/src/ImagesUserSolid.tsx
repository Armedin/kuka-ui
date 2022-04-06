import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 32H144c-26.5 0-48 21.49-48 48v256c0 26.5 21.5 48 48 48h384c26.51 0 48-21.49 48-48V80c0-26.51-21.5-48-48-48zM336 96c35.35 0 64 28.66 64 64s-28.65 64-64 64-64-28.66-64-64 28.7-64 64-64zm96 224H240c-8.836 0-16-7.164-16-16 0-26.51 21.49-48 48-48h128c26.51 0 48 21.49 48 48 0 8.8-7.2 16-16 16zm24 160H120C53.83 480 0 426.2 0 360V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgImagesUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImagesUserSolid;
