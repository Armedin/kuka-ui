import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M310.6 182.6c-12.51 12.51-32.76 12.49-45.25 0L192 109.3V480c0 17.69-14.31 32-32 32s-32-14.31-32-32V109.3l-73.37 73.3c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128c12.47 12.55 12.47 32.75-.03 45.25z" />
  </svg>
);

const SvgArrowUpLongSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpLongSolid;
