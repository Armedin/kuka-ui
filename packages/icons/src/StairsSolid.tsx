import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 64c0 17.67-14.31 32-32 32h-96v96c0 17.67-14.31 32-32 32h-96v96c0 17.67-14.31 32-32 32h-96v96c0 17.67-14.31 32-32 32H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h96v-96c0-17.67 14.31-32 32-32h96v-96c0-17.67 14.31-32 32-32h96V64c0-17.67 14.31-32 32-32h128c17.7 0 32 14.33 32 32z" />
  </svg>
);

const SvgStairsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStairsSolid;
