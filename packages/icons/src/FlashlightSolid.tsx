import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M383.1 160h-352c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h352l16.12 10.75C443.2 391.5 492.8 408.4 544 413.6V98.38c-51.25 5.25-100.8 22.12-143.9 50.87l-17 10.75zm-96 128h-32c-17.62 0-32-14.38-32-32s14.38-32 32-32h32c17.62 0 32 14.38 32 32s-13.5 32-32 32zm320-192h-32v320h32c17.62 0 32-14.38 32-32V128c0-17.6-13.5-32-32-32z" />
  </svg>
);

const SvgFlashlightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlashlightSolid;
