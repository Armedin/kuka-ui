import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.9 483.4c7 5.5 8.1 14.7 2.7 22.5-5.5 7-15.6 8.1-22.5 2.7L6.086 28.56C-.849 23.08-2.033 13.02 3.443 6.086 8.918-.849 18.98-2.033 25.91 3.443L633.9 483.4zm-67-386.67L430.4 261.6l-25.1-19.8 137-165.47c1.1-1.35 1.7-3.05 1.7-4.8 0-4.16-3.4-7.53-7.5-7.53H180.1l-40.5-32h396.9c21.8 0 39.5 17.7 39.5 39.53 0 9.2-3.2 18.11-9.1 25.2zM352 362.8l32 25.3v58c0 18.7-15.2 33.9-33.9 33.9-7.5 0-14.8-2.5-20.8-7.1l-60.9-47.5c-7.8-6-13.3-15.3-13.3-25.2V287l32 25.3v87.9l61 47.4c1.2.3 1.6.4 2 .4 1.1 0 1.9-.8 1.9-1.9v-83.3z" />
  </svg>
);

const SvgFilterSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilterSlash;
