import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M448 64H56c-6.37 0-12.5 2.5-17 7s-7 10.63-7 17v264c0 53 43 96 96 96h192c53 0 96-43 96-96v-32h32c70.75 0 128-57.25 128-128S518.8 64 448 64zm0 192h-32V128h32c35.38 0 64 28.62 64 64s-28.6 64-64 64z" />
  </svg>
);

const SvgMugSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMugSolid;
