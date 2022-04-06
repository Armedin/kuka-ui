import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm120 312c0 17.69-14.33 32-32 32s-32-14.31-32-32v-66.7L190.6 366.7c-6.2 6.2-14.4 9.3-22.6 9.3s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L266.8 200H200c-17.67 0-32-14.31-32-32s14.33-32 32-32h144c17.67 0 32 14.31 32 32v144z" />
  </svg>
);

const SvgCircleArrowUpRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowUpRightSolid;
