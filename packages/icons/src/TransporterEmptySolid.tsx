import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M288 448H32c-17.62 0-32 14.38-32 32v32h320v-32c0-17.6-14.4-32-32-32z" />
  </svg>
);

const SvgTransporterEmptySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTransporterEmptySolid;
