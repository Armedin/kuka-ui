import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448 160H64c-17.67 0-32 14.3-32 32v256c0 17.7 14.33 32 32 32h296.2c10.1 12.1 21.7 22.9 34.6 32H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h384c35.3 0 64 28.7 64 64v.7c-5.3-.5-10.6-.7-16-.7s-10.7.2-16 .7v-.7c0-17.7-14.3-32-32-32zm0-96c8.8 0 16 7.16 16 16s-7.2 16-16 16H64c-8.84 0-16-7.16-16-16s7.16-16 16-16h384zM400 0c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16H112c-8.8 0-16-7.16-16-16 0-8.836 7.2-16 16-16h288zm112 351.1h48c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16h-48v48c0 9.7-7.2 16-16 16s-16-6.3-16-16v-48h-48c-8.8 0-16-6.3-16-16 0-7.9 7.2-16 16-16h48v-48c0-7.9 7.2-16 16-16s16 8.1 16 16v48zM640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zM496 256c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112z" />
  </svg>
);

const SvgRectangleHistoryCirclePlus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleHistoryCirclePlus;
