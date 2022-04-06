import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M208 256c-26.4 0-48 21.6-48 47.1v160c0 27.3 21.6 48.9 47.1 48.9s48.9-21.6 48.9-48V303.1c0-25.5-21.6-47.1-48-47.1zM48 384c-26.4 0-48 21.6-48 47.1v32C0 490.4 21.6 512 47.1 512S96 490.4 96 464v-32c0-26.4-21.6-48-48-48z" />
  </svg>
);

const SvgSignalBarsFairSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignalBarsFairSolid;
