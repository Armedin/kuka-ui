import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m497.9 97.94-83.88-83.88C406.3 6.294 391.1 0 380.1 0H144c-26.5 0-48 21.48-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.48 48-48V131.9c0-11-6.3-26.2-14.1-33.96zM288 352c-35.34 0-64-28.66-64-64s28.66-64 64-64 64 28.66 64 64-28.7 64-64 64zm96-208c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V80c0-8.84 7.2-16 16-16h192c8.8 0 16 7.16 16 16v64zm8 368H120C53.83 512 0 458.2 0 392V120c0-13.2 10.75-24 24-24s24 10.8 24 24v272c0 39.7 32.3 72 72 72h272c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgFloppyDisksSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFloppyDisksSolid;
