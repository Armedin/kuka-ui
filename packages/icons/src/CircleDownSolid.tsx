import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zM129.2 265.9c2.5-6 8.3-9.9 14.8-9.9h64v-96c0-17.67 14.33-32 32-32h32c17.67 0 32 14.33 32 32v96h64c6.469 0 12.31 3.891 14.78 9.875a15.988 15.988 0 0 1-3.469 17.44l-112 112c-6.248 6.248-16.38 6.248-22.62 0l-112-112C128.1 278.7 126.7 271.9 129.2 265.9z" />
  </svg>
);

const SvgCircleDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleDownSolid;
