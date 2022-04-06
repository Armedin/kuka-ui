import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M272 448H48c-26.47 0-48 21.5-48 48 0 8.8 7.156 16 16 16s16-7.2 16-16 7.17-16 16-16h224c8.828 0 16 7.172 16 16 0 8.844 7.156 16 16 16s16-7.156 16-16c0-26.5-21.5-48-48-48z" />
  </svg>
);

const SvgTransporterEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTransporterEmpty;
