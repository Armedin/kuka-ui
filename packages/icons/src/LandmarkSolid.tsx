import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240.1 4.216c9-5.621 21.9-5.621 31.8 0L443.6 102.4l3.5 1.6v.9l48.8 27.3c12.6 7.2 18.7 22 15 36-3.7 14-16.4 23.8-31.8 23.8h-448c-13.61 0-26.305-9.8-30.029-23.8s2.453-28.8 15.049-36l46.98-27.3v-.9l5.27-1.6L240.1 4.216zM64 224h64v192h40V224h64v192h48V224h64v192h40V224h64v196.3c.6.3 1.2-.2 1.8 1.1l48 32c11.7 7.8 16.9 22.4 12.8 35.9-4.1 13.5-16.5 22.7-30.6 22.7H32c-14.1 0-26.54-9.2-30.627-22.7-4.086-13.5 1.144-28.1 12.877-35.9l48-32c.57-1.3 1.16-.8 1.75-1.1V224z" />
  </svg>
);

const SvgLandmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLandmarkSolid;
