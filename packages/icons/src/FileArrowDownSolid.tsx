import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 128H256V0l128 128zm-128 32h128v304c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h176l.004 128C224 145.7 238.3 160 256 160zm-1 135-39 39.1V232c0-13.25-10.75-24-24-24s-24 10.8-24 24v102.1L128.1 295c-3.8-4.7-9.9-7-16.1-7s-12.28 2.3-16.97 7c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94s-24.57-9.3-33.97 0z" />
  </svg>
);

const SvgFileArrowDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileArrowDownSolid;
