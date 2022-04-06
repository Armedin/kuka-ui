import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M32 96C14.33 96 0 81.67 0 64s14.33-32 32-32h512c17.7 0 32 14.33 32 32s-14.3 32-32 32H32zm73.4 41.4c12.5-12.5 32.7-12.5 45.2 0l96 96c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L160 237.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V237.3l-41.37 41.3c-12.5 12.5-32.76 12.5-45.258 0-12.496-12.5-12.496-32.7 0-45.2l96.028-96zm224 96 96-96c12.5-12.5 32.7-12.5 45.2 0l96 96c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L480 237.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V237.3l-41.4 41.3c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2z" />
  </svg>
);

const SvgArrowsUpToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsUpToLineSolid;
