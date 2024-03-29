import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M320 32H64c-17.67 0-32 14.33-32 32v384c0 17.7 14.33 32 32 32h232.2c8.9 11.8 21.1 22.3 33.5 31.3-3.1.4-6.4.7-9.7.7H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v134.6c-11.2 3.2-21.9 7.4-32 12.6V64c0-17.67-14.3-32-32-32zM64 144c0-8.8 7.16-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16zm208 80c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h192zm-64 96c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h128zm224-32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-16.9 128v-32c-7.9-.9-15.1-7.2-15.1-16s7.2-16 16-16h15.1c9.7 0 16 7.2 16 16l.9 48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 15.1-16zm16.9 96c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm112-144c0-61.9-50.1-112-112-112s-112 50.1-112 112 50.1 112 112 112 112-50.1 112-112z" />
  </svg>
);

const SvgMemoCircleInfo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMemoCircleInfo;
