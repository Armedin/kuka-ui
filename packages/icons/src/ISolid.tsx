import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 448c0 17.67-14.31 32-32 32H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h96V96H32C14.31 96 0 81.67 0 64s14.31-32 32-32h256c17.69 0 32 14.33 32 32s-14.31 32-32 32h-96v320h96c17.7 0 32 14.3 32 32z" />
  </svg>
);

const SvgISolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgISolid;
