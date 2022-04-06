import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 400c0 8.8 7.16 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.18 0-80-35.8-80-80V64c0-17.67 14.33-32 32-32s32 14.33 32 32v336zM320 96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32V48c0-8.84 7.2-16 16-16s16 7.16 16 16v48zm64 128c0-17.7 14.3-32 32-32v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c-17.7 0-32-14.3-32-32v-64zM160 80c0-8.84 7.2-16 16-16s16 7.16 16 16v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32V80z" />
  </svg>
);

const SvgChartCandlestickSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartCandlestickSolid;
