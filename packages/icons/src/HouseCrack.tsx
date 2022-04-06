import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M570.6 244c6.6 5.8 7.2 15.1.5 22.6-4.9 6.6-15.1 7.2-21.7.5l-37.4-33V432c0 44.2-35.8 80-80 80H144c-44.18 0-80-35.8-80-80V234.1l-37.41 33c-6.63 6.7-16.741 6.1-22.587-.5-5.847-7.5-5.215-16.8 1.411-22.6L277.4 4.002a16.039 16.039 0 0 1 21.2 0L570.6 244zM144 480h130.1l-47.4-71.1c-4.9-7.4-2.9-17.3 4.4-22.2l79.8-53.2-82.2-82.2c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l96 96c3.4 3.4 5.1 8.1 4.6 12.9-.5 4.7-3 9.1-7 11.7l-82.7 55.1 50.4 75.6H432c26.5 0 48-21.5 48-48V206.7L288 37.34 96 206.7V432c0 26.5 21.5 48 48 48z" />
  </svg>
);

const SvgHouseCrack = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseCrack;
