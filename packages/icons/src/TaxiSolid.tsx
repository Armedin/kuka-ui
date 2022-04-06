import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M352 0c17.7 0 32 14.33 32 32v32.15c38.6 2.16 72.3 27.34 85.2 64.15l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-48H128v48c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32V288c0-26.7 16.36-49.6 39.61-59.2l35.19-100.5c12.9-36.81 46.6-61.99 85.2-64.15V32c0-17.67 14.3-32 32-32h128zM197.4 128c-13.6 0-25.7 8.6-30.2 21.4L141.1 224h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4H197.4zM128 352c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm320-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgTaxiSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTaxiSolid;
