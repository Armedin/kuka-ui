import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v48H0v-48c0-26.51 21.49-48 48-48h48V32zm352 432c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192h448v272zM147.2 360.7l-47.39 61.5c-8.09 10.6-.59 25.8 12.69 25.8h226.4c12.6 0 20.2-13.9 13.5-24.6l-83.5-131.1c-6.1-9.6-20.1-9.9-26.6-.5L184 376l-11.4-15.1c-6.3-8.5-19-8.6-25.4-.2zM128 320c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

const SvgCalendarImageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarImageSolid;
