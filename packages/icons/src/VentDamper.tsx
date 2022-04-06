import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M464 240H176c-8.8 0-16 7.2-16 16s7.168 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 80H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.832 0 16-7.168 16-16s-7.2-16-16-16zm0-160H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm128-32h-16c0-35.36-28.64-64-64-64H128c-35.36 0-64 28.64-64 64H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h16c0 35.36 28.64 64 64 64h384c35.36 0 64-28.64 64-64h16c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM64 352H48c-8.83 0-16-7.2-16-16V176c0-8.8 7.17-16 16-16h16v192zm480 32c0 17.66-14.34 32-32 32H128c-17.66 0-32-14.34-32-32V128c0-17.66 14.34-32 32-32h384c17.66 0 32 14.34 32 32v256zm64-48c0 8.832-7.168 16-16 16h-16V160h16c8.8 0 16 7.2 16 16v160z" />
  </svg>
);

const SvgVentDamper = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVentDamper;
