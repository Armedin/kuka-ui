import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M104 96H56c-13.25 0-24 10.8-24 24v104c-17.67 0-32 14.3-32 32 0 17.67 14.33 32 31.1 32l.9 104c0 13.3 10.75 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.2-10.7-24-24-24zm352-64h-48c-13.2 0-24 10.75-24 24v168H256V56c0-13.25-10.7-24-24-24h-48c-13.2 0-24 10.75-24 24v400c0 13.3 10.8 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56c0-13.25-10.7-24-24-24zm152 192V120c0-13.2-10.7-24-24-24h-48c-13.2 0-24 10.8-24 24v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgDumbbellSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDumbbellSolid;
