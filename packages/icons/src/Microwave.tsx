import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M464 128c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V128zM96 152c0-13.3 10.7-24 24-24h272c13.3 0 24 10.7 24 24v176c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24V152zm288 168V160H128v160h256zM96 448v16c0 8.8-7.16 16-16 16s-16-7.2-16-16v-16c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v288c0 35.3-28.7 64-64 64v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H96zM512 64H64c-17.67 0-32 14.33-32 32v288c0 17.7 14.33 32 32 32h448c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32z" />
  </svg>
);

const SvgMicrowave = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMicrowave;
