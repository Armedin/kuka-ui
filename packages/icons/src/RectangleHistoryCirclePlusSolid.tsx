import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 368c0 59.5 29.5 112.1 74.8 144H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h384c23.8 0 44.5 12.9 55.5 32.2-2.5-.1-5-.2-7.5-.2-97.2 0-176 78.8-176 176zM440 80c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H72c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h368zM392 0c13.3 0 24 10.75 24 24s-10.7 24-24 24H120c-13.3 0-24-10.75-24-24s10.7-24 24-24h272zm-40 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm160-64.9c0-7.9-7.2-16-16-16s-16 8.1-16 16v48h-48c-8.8 0-16 8.1-16 16 0 9.7 7.2 16 16 16h48v48c0 9.7 7.2 16 16 16s16-6.3 16-16v-48h48c8.8 0 16-6.3 16-16 0-7.9-7.2-16-16-16h-48v-48z" />
  </svg>
);

const SvgRectangleHistoryCirclePlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleHistoryCirclePlusSolid;
