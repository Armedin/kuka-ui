import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M272 63.1h-32c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48l32 1.8c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48.9-48-48.9zm-192 0H48c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448h32c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48.9-48-48.9z" />
  </svg>
);

const SvgPauseSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPauseSolid;
