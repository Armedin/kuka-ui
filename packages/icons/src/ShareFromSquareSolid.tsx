import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568.9 143.5 418 5.3c-13.2-12.073-34-2.261-34 16.54V96c-142.8 1.63-256 30.1-256 164.6 0 54.3 35.2 108.1 74.08 136.2 12.14 8.781 29.42-2.238 24.94-16.46C186.7 252.2 256 224 384 223.1v74.2c0 18.82 20.84 28.59 34.02 16.51l150.9-138.2c9.48-7.81 9.48-23.41-.02-32.11zM416 384c-17.67 0-32 14.33-32 32v31.1l-320-.001V128h32c17.67 0 32-14.32 32-32s-14.3-32-32-32H64C28.65 64 0 92.65 0 128v319.1c0 35.34 28.65 64 64 64l320-.001c35.35 0 64-28.66 64-64V416c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgShareFromSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShareFromSquareSolid;
