import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M352 224c0 35.3-28.7 64-64 64s-64.9-28.7-64.9-64 29.6-64 64.9-64c35.3 0 64 28.7 64 64zm-64-32c-17.7 0-32.9 14.3-32.9 32s15.2 32 32.9 32 32-14.3 32-32-14.3-32-32-32zm-40.9 160c-21.2 0-40 17.9-40 40v8c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16v-8c0-39.8 33.1-72 72-72H328c39.8 0 72 32.2 72 72v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-22.1-17.9-40-40-40h-80.9zM384 79.37V56c0-13.25 10.7-24.9 24-24.9h80c13.3 0 24 11.65 24 24.9v136.3l58.6 51.7c6.6 5.8 7.2 15.1.5 22.6-4.9 6.6-15.1 7.2-21.7.5l-37.4-33V432c0 44.2-35.8 80-80 80H144c-44.18 0-80-35.8-80-80V234.1l-37.41 33c-6.63 6.7-16.741 6.1-22.587-.5-5.847-7.5-5.215-16.8 1.411-22.6L277.4 4.002a16.039 16.039 0 0 1 21.2 0L384 79.37zm32 28.23 64 56.5V64h-64v43.6zM144 480h288c26.5 0 48-21.5 48-48V206.7L288 37.34 96 206.7V432c0 26.5 21.5 48 48 48z" />
  </svg>
);

const SvgHouseChimneyUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseChimneyUser;
