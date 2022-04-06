import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M56 319.9h72V448c0 17.69 14.33 32.02 32 32.02h64c17.67 0 32-14.34 32-32.02V319.9l72-.031c9.578 0 18.25-5.71 22.05-14.51 3.781-8.803 1.984-19.03-4.594-26l-136-144.1c-9.062-9.602-25.84-9.602-34.91 0l-136 144.1C31.97 286.3 30.17 296.6 33.95 305.4c3.8 8.8 12.47 14.5 22.05 14.5zM351.1 32h-320C14.33 32 0 46.33 0 63.1 0 81.67 14.33 96 32 96h320c17.7 0 32-14.33 32-32s-14.3-32-32.9-32z" />
  </svg>
);

const SvgUpToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpToLineSolid;
