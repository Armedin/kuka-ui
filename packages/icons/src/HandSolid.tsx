import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 128v208c0 97.05-78.95 176-176 176h-37.72c-53.42 0-103.7-20.8-141.4-58.58l-113.1-113.1C3.906 332.5 0 322.2 0 312c0-21.3 17.15-40 40-40 10.23 0 20.47 3.906 28.28 11.72L128 343.4V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.073 176c.027 8.8 7.127 16 15.927 16s16.07-7.164 16.07-16L224 32c0-17.67 14.33-32 32-32s32 14.33 32 32l.048 208c0 8.836 7.111 16 15.95 16S320 248.8 320 240V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.073 176c0 8.836 7.09 16 15.93 16S416 248.8 416 240V128c0-17.67 14.33-32 32-32s32 14.3 32 32z" />
  </svg>
);

const SvgHandSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandSolid;
