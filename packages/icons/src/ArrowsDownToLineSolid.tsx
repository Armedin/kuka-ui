import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h512zm-73.4-41.4c-12.5 12.5-32.7 12.5-45.2 0l-96-96c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l41.4 41.3V64c0-17.67 14.3-32 32-32s32 14.33 32 32v210.7l41.4-41.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-96 96zm-224-96-96 96c-12.5 12.5-32.7 12.5-45.2 0l-96.027-96c-12.497-12.5-12.497-32.7 0-45.2s32.757-12.5 45.257 0L96 274.7V64c0-17.67 14.3-32 32-32s32 14.33 32 32v210.7l41.4-41.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2z" />
  </svg>
);

const SvgArrowsDownToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsDownToLineSolid;
