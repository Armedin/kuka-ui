import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 128v224c0 17.69-14.33 32-32 32s-32-14.31-32-32V205.3L54.6 406.7c-6.22 6.2-14.41 9.3-22.6 9.3s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L210.8 160H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h224c17.7 0 32 14.3 32 32z" />
  </svg>
);

const SvgArrowUpRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpRightSolid;
