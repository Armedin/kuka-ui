import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 400c0 26.5 21.49 48 48 48h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.18 0-80-35.8-80-80V48c0-8.84 7.164-16 16-16 8.84 0 16 7.16 16 16v352zM320 96c0 .27-.9.53-.9.8 19.1 3.7 32.9 19.8 32.9 39.2v80c0 19.4-13.8 35.5-32.9 39.2 0 .3.9.5.9.8v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48.8c-18.2-3.7-32-19.8-32-39.2v-80c0-19.4 13.8-35.5 32-39.2V48c0-8.84 7.2-16 16-16s16 7.16 16 16v48zm0 40c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-80zM176 64c8.8 0 16 7.16 16 16v48c0 .3-.9.5-.9.8 19.1 3.7 32.9 19.8 32.9 39.2v112c0 19.4-13.8 35.5-32.9 39.2 0 .3.9.5.9.8v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48.8c-18.2-3.7-32-19.8-32-39.2V168c0-19.4 13.8-35.5 32-39.2V80c0-8.84 7.2-16 16-16zm-8 96c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-16zm248-16c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 .3-.9.5-.9.8 19.1 3.7 32.9 19.8 32.9 39.2v48c0 19.4-13.8 35.5-32.9 39.2 0 .3.9.5.9.8v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48.8c-18.2-3.7-32-19.8-32-39.2v-48c0-19.4 13.8-35.5 32-39.2V144zm8 80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-16z" />
  </svg>
);

const SvgChartCandlestick = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartCandlestick;
