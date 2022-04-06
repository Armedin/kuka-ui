import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 432v32c0 8.75-7.25 16-16 16H128C57.25 480 0 422.75 0 352V128c0-52.88 43.13-96 96-96h256c52.88 0 96 43.13 96 96 0 0-.125 181.5-.375 184.4C443.4 354 405.1 384 363.3 384H128c-17.75 0-32-14.25-32-32s14.25-32 32-32h240c8.75 0 16-7.25 16-16s-7.2-16-16-16H128c-35.25 0-64 28.75-64 64s28.75 64 64 64h304c8.8 0 16 7.3 16 16z" />
  </svg>
);

const SvgBlanketSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlanketSolid;
