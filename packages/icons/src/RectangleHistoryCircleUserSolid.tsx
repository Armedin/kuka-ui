import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 368c0 59.5 29.5 112.1 74.8 144H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h384c23.8 0 44.5 12.9 55.5 32.2-2.5-.1-5-.2-7.5-.2-97.2 0-176 78.8-176 176zM440 80c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H72c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h368zM392 0c13.3 0 24 10.75 24 24s-10.7 24-24 24H120c-13.3 0-24-10.75-24-24s10.7-24 24-24h272zm248 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-111.4 48h-65.2c-21 0-38.9 13.7-45.1 32.7 20.2 19.4 47.5 31.3 77.7 31.3 30.2 0 57.5-11.9 77.7-31.3-6.2-19-24.1-32.7-45.1-32.7zM496 288c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
  </svg>
);

const SvgRectangleHistoryCircleUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleHistoryCircleUserSolid;
