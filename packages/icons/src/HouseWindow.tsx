import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M336 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-96.9c-16.8 0-32-14.3-32-32v-96c0-17.7 15.2-32 32-32H336zm-96.9 128H336v-96h-96.9v96zm331.5-76c6.6 5.8 7.2 15.1.5 22.6-4.9 6.6-15.1 7.2-21.7.5l-37.4-33V432c0 44.2-35.8 80-80 80H144c-44.18 0-80-35.8-80-80V234.1l-37.41 33c-6.63 6.7-16.741 6.1-22.587-.5-5.847-7.5-5.215-16.8 1.411-22.6L277.4 4.002a16.039 16.039 0 0 1 21.2 0L570.6 244zM144 480h288c26.5 0 48-21.5 48-48V206.7L288 37.34 96 206.7V432c0 26.5 21.5 48 48 48z" />
  </svg>
);

const SvgHouseWindow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseWindow;
