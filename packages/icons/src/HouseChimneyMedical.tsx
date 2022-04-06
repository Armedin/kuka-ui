import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M232 192c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v40h40c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-40v40c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32v-40h-40c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32h40v-40zm32 0v72h-72v48h72v72h48v-72h72v-48h-72v-72h-48zM277.4 4.002a16.039 16.039 0 0 1 21.2 0L384 79.37V56c0-13.25 10.7-24.9 24-24.9h80c13.3 0 24 11.65 24 24.9v136.3l58.6 51.7c6.6 5.8 7.2 15.1.5 22.6-4.9 6.6-15.1 7.2-21.7.5l-37.4-33V432c0 44.2-35.8 80-80 80H144c-44.18 0-80-35.8-80-80V234.1l-37.41 33c-6.63 6.7-16.741 6.1-22.587-.5-5.847-7.5-5.215-16.8 1.411-22.6L277.4 4.002zM480 164.1V64h-64v43.6l64 56.5zM96 206.7V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V206.7L288 37.34 96 206.7z" />
  </svg>
);

const SvgHouseChimneyMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseChimneyMedical;
