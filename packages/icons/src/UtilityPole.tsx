import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 32c-8.8 0-16 7.16-16 16v48h-64V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v48h-80V32c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v64h-80V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v48H32V48c0-8.84-7.16-16-16-16S0 39.16 0 48v48c0 17.67 14.33 32 32 32h27.16L208 227.2V496c0 8.8 7.2 16 16 16s16-7.163 16-15.1V128h32v368c0 8.8 7.2 16 16 16s16-7.163 16-15.1V227.2L452.8 128H480c17.67 0 32-14.33 32-32V48c0-8.84-7.2-16-16-16zM208 188.8 116.8 128H208v60.8zM272 96h-32V32h32v64zm32 92.8V128h91.16L304 188.8z" />
  </svg>
);

const SvgUtilityPole = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUtilityPole;
