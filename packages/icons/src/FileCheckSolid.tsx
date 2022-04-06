import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 128H256V0l128 128zm-128 32h128v304c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h176l.004 128C224 145.7 238.3 160 256 160zm-10.2 104.4-79.13 92.34-29.69-29.69c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l48 48c4.5 4.5 10.62 7.031 16.97 7.031.313 0 .625 0 .906-.031a23.989 23.989 0 0 0 17.31-8.344l96-112c8.625-10.06 7.47-25.22-2.594-33.84C269.6 253.2 254.4 254.3 245.8 264.4z" />
  </svg>
);

const SvgFileCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileCheckSolid;
