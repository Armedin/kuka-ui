import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 448c0 17.67-14.31 32-32 32H32c-12.41 0-23.72-7.188-28.97-18.42a31.989 31.989 0 0 1 4.375-34.06l276.3-331.5H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h320c12.41 0 23.72 7.188 28.97 18.42a31.989 31.989 0 0 1-4.375 34.06L100.3 416H352c17.7 0 32 14.3 32 32z" />
  </svg>
);

const SvgZSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgZSolid;
