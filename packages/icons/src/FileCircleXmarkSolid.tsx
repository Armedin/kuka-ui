import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 64C0 28.65 28.65 0 64 0h160v128c0 17.7 14.3 32 32 32h128v38.6c-73.9 20.9-128 88.8-128 169.4 0 59.1 29.1 111.3 73.7 143.3-3.1.4-6.4.7-9.7.7H64c-35.35 0-64-28.7-64-64V64zm256 64V0l128 128H256zm32 240c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm203.3-36.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0L432 345.4l-36.7-36.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l36.7-36.7 36.7 36.7c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6L454.6 368l36.7-36.7z" />
  </svg>
);

const SvgFileCircleXmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileCircleXmarkSolid;
