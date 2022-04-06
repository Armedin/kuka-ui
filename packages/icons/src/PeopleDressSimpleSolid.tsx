import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 128c35.38 0 64-28.62 64-64S419.38 0 384 0s-64 28.62-64 64 28.6 64 64 64zm121.5 215.2-42.4-148.4c-5.8-20.6-24.7-34.8-47-34.8h-65.99c-21.43 0-40.26 14.21-46.15 34.81l-42.4 148.4C256.6 363.7 271.1 384 293.2 384H320v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96h26.78c21.22 0 36.62-20.3 30.72-40.8zM128 128c35.38 0 64-28.62 64-64S163.4 0 128 0 64 28.62 64 64s28.63 64 64 64zm79.1 66.8c-5.8-20.6-24.7-34.8-47-34.8H95c-21.43 0-40.26 14.2-46.15 34.8L6.452 343.2C.612 363.7 15.96 384 37.22 384H64v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96h26.78c21.26 0 36.61-20.35 30.77-40.79L207.1 194.8z" />
  </svg>
);

const SvgPeopleDressSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPeopleDressSimpleSolid;
