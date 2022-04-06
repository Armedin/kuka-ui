import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 64C0 28.65 28.65 0 64 0h160v128c0 17.7 14.3 32 32 32h128v38.6c-73.9 20.9-128 88.8-128 169.4 0 59.1 29.1 111.3 73.7 143.3-3.1.4-6.4.7-9.7.7H64c-35.35 0-64-28.7-64-64V64zm256 64V0l128 128H256zm32 240c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144-48c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm-16 64v48c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16v-64c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgFileCircleInfoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileCircleInfoSolid;
