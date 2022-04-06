import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M262.5 256H320V64c0-17.67 14.3-32 32-32s32 14.33 32 32v192h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v128c0 14.1-9.2 26.5-22.7 30.6-13.5 4.1-28.1-1.1-35.9-12.8L228.2 320H128v128c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32V320H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32V64c0-14.1 9.23-26.54 22.73-30.63 13.47-4.08 28.07 1.15 35.87 12.88L262.5 256zm42.6 64 14.9 22.3V320h-14.9zm-119.6-64L128 169.7V256h57.5z" />
  </svg>
);

const SvgNairaSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNairaSignSolid;
