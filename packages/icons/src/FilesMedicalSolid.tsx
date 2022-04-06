import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 0v96h96L352 0zm0 128h96v240c0 26.51-21.49 48-48 48H144c-26.5 0-48-21.5-48-48V48c0-26.51 21.5-48 48-48h176v96c0 17.6 14.4 32 32 32zm2.3 96H304v-50.3c0-7.6-6.1-13.7-13.7-13.7h-36.57c-7.63 0-13.73 6.1-13.73 13.7V224h-50.3c-7.6 0-13.7 6.1-13.7 13.7v36.57c0 7.63 6.1 13.73 13.7 13.73H240v50.29c0 7.61 6.1 13.71 13.7 13.71h36.57c7.63 0 13.73-6.1 13.73-13.7V288h50.29c7.61 0 13.71-6.1 13.71-13.7v-36.6c0-7.6-6.1-13.7-13.7-13.7zM328 512H120C53.83 512 0 458.2 0 392V120c0-13.2 10.75-24 24-24s24 10.8 24 24v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgFilesMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilesMedicalSolid;
