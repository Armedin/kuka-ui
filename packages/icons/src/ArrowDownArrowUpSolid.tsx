import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m431.6 138-87.1-96.09c-12.12-13.26-35.06-13.26-47.19 0L210.21 138c-13.71 13.1-12.91 33.4.19 45.3 13.02 11.95 33.27 11.04 45.22-1.973L288 145.9v302c0 17.8 14.3 32.1 32 32.1s32-14.33 32-32.03V145.9l32.4 35.39c11.42 12.45 31.63 14.43 45.22 1.973C442.7 171.4 443.5 151.1 431.6 138zM192.4 330.7 160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-11.42-12.45-31.63-14.43-45.22-1.969-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z" />
  </svg>
);

const SvgArrowDownArrowUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownArrowUpSolid;
