import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 224c0-35.35-28.66-64-64-64H224v-32c0-17.67 14.33-32 32-32h128c17.7 0 32-14.31 32-32.9S401.7 32 384 32H256c-53.9 0-96 42.98-96 96v32c-35.3 0-64.9 28.7-64.9 64-53.02 0-96 42.98-96 96l.9 16h576v-16c0-53.9-43-96-96-96zM0 384c0 53.02 42.98 96 96 96h384c53.02 0 96-42.98 96-96v-16H0v16z" />
  </svg>
);

const SvgCurlingStoneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCurlingStoneSolid;
