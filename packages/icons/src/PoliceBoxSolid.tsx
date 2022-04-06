import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 0c8.8 0 16 7.164 16 16v16h80c17.7 0 32 14.33 32 32 17.7 0 32 14.33 32 32v368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h8V96c0-17.67 14.33-32 32-32 0-17.67 14.33-32 32-32h80V16c0-8.836 7.2-16 16-16zM96 160h32v-32h-24c-4.42 0-8 3.6-8 8v24zm0 40c0 4.4 3.58 8 8 8h24v-32H96v24zm72-72h-24v32h32v-24c0-4.4-3.6-8-8-8zm-24 80h24c4.4 0 8-3.6 8-8v-24h-32v32zm72-80c-4.4 0-8 3.6-8 8v24h32v-32h-24zm24 48h-32v24c0 4.4 3.6 8 8 8h24v-32zm16-16h32v-24c0-4.4-3.6-8-8-8h-24v32zm32 16h-32v32h24c4.4 0 8-3.6 8-8v-24zM96 304c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v48z" />
  </svg>
);

const SvgPoliceBoxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPoliceBoxSolid;
