import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c-35.38 0-64 28.62-64 64s28.62 63.1 64 63.1 64-28.62 64-63.1-28.6-64-64-64zM224 64C100.2 64 0 164.2 0 288s100.2 224 224 224 224-100.2 224-224S347.8 64 224 64zm96 272.9c0 10-2.375 19.75-6.75 28.62l-40.38 80.63c-4 8.25-11.88 14-20.88 15.5-3.375.625-6.875 1-10.38 1.375-4.5.5-9-1-12.38-4C225.9 455.9 224 451.6 224 447.1V384c-17.62 0-32-14.38-32-32v-32l-54.6-54.6c-6-6-14.2-9.4-22.6-9.4H89.75c-21.65 0-34.5-21.5-26-40.5C91.38 154.5 152.8 112 224 112h4.5c15.4.6 27.5 13.2 27.5 28.6 0 12.6-3.7 25-10.7 35.5l-49.8 57.4c-11 12.62-10.25 31.75 1.625 43.63C204.1 284.1 213.5 288 223.5 288H288c17.62 0 32 14.38 32 32v16.9z" />
  </svg>
);

const SvgPlanetMoonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlanetMoonSolid;
