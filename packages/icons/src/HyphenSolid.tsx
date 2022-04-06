import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M288 288H32c-17.69 0-32-14.32-32-32.01S14.31 224 32 224h256c17.69 0 32 14.3 32 31.99S305.7 288 288 288z" />
  </svg>
);

const SvgHyphenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHyphenSolid;
