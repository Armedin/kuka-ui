import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M277.4 4.002a16.039 16.039 0 0 1 21.2 0L512.5 192.8c-5.4-.5-10.9-.8-16.5-.8-10.2 0-20.2.9-29.9 2.5L288 37.34 96 206.7V432c0 26.5 21.5 48 48 48h216.2c10.1 12.1 21.7 22.9 34.6 32H144c-44.18 0-80-35.8-80-80V234.1l-37.41 33c-6.63 6.7-16.741 6.1-22.587-.5-5.847-7.5-5.215-16.8 1.411-22.6L277.4 4.002zM354 264h-42v-72h-48v72h-72v48h72v72h56.7c.9 9.9 2.6 19.5 5.1 28.9-4.2 2-8.9 3.1-13.8 3.1h-48c-17.7 0-32-14.3-32-32v-40h-40c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32h40v-40c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v40h40.3c-11.4 9.4-21.6 20.1-30.3 32zm164.6 104 36.7 36.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L496 390.6l-36.7 36.7c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l36.7-36.7-36.7-36.7c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l36.7 36.7 36.7-36.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6L518.6 368zm121.4 0c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zM496 256c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112z" />
  </svg>
);

const SvgHouseMedicalCircleXmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseMedicalCircleXmark;
