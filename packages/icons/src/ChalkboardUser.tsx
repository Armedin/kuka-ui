import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 320c53.02 0 96-42.98 96-96s-42.98-96-96-96c-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96zm0-160c35.29 0 64 28.71 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm32 192h-64C57.31 352 0 409.31 0 480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32 0-70.7-57.3-128-128-128zM32 480c0-52.94 43.07-96 96-96h64c52.94 0 96 43.06 96 96H32zM592 0H208c-26.5 0-48 21.53-48 48v32c0 8.84 7.2 16 16 16s16-7.16 16-16V48c0-8.81 7.2-16 16-16h384c8.8 0 16 7.19 16 16v320c0 8.812-7.172 16-16 16h-16v-48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v48h-32c-8.844 0-16 7.156-16 16s7.2 16 16 16h240c26.5 0 48-21.5 48-48V48c0-26.47-21.5-48-48-48zm-48 384H416v-48c0-8.812 7.172-16 16-16h96c8.828 0 16 7.188 16 16v48z" />
  </svg>
);

const SvgChalkboardUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChalkboardUser;
