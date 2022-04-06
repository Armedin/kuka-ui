import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32v32h96V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v48H96v-48c0-26.51 21.5-48 48-48h48V32c0-17.67 14.3-32 32-32s32 14.33 32 32zM96 192h416v176c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V192zM48 392c0 39.8 32.24 72 72 72h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H120C53.73 512 0 458.3 0 392V184c0-13.3 10.75-24 24-24s24 10.7 24 24v208z" />
  </svg>
);

const SvgCalendarsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarsSolid;
