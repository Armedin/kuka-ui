import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M277.4 11.98C261.1 4.469 243.1 0 224 0c-53.7 0-99.5 33.13-118.5 80h81.07l90.83-68.02zM342.5 80c-7.895-19.47-20.66-36.19-36.48-49.51L240 80h102.5zM224 256c70.7 0 128-57.31 128-128 0-5.48-.945-10.7-1.613-16H97.61c-.66 5.3-1.61 10.5-1.61 16 0 70.7 57.3 128 128 128zm48 160h-45.14l58.64 93.83C305.4 503.1 320 485.8 320 464c0-26.5-21.5-48-48-48zm2.7-112H173.3c-5.393 0-10.71.324-15.98.805L206.9 384H272c44.13 0 80 35.88 80 80 0 18.08-6.252 34.59-16.4 48h77.73c19.17 0 34.67-15.5 34.67-34.7 0-95.7-77.6-173.3-173.3-173.3zM0 477.3C0 496.5 15.52 512 34.66 512H64V342.9C24.97 374.7 0 423.1 0 477.3zm96-154.9V512h153.1L123.7 311.3c-9.6 2.9-18.9 6.6-27.7 11.1z" />
  </svg>
);

const SvgUserInjuredSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserInjuredSolid;