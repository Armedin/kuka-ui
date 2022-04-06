import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 384H16c-8.75 0-16 7.3-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16c0-8.7-7.2-16-16-16zM128 96h384v256h64V80c0-26.37-21.6-48-48-48H112c-26.37 0-48 21.63-48 48v272h64V96zm176 240h32c8.801 0 16-7.201 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.801-7.199-16-16-16h-48v-48c0-8.801-7.199-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.799 7.199 16 16 16h48v48c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgLaptopMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLaptopMedicalSolid;
