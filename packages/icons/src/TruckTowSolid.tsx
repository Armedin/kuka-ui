import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 0h49.6c9.2 0 17.9 3.909 23.9 10.74L384 252V128c0-17.7 14.3-32 32-32h82.7c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V376c0 22.1-17.9 40-40 40h-24c0 53-43 96-96 96-53.9 0-96-43-96-96H256c0 53-43 96-96 96-53.9 0-96-43-96-96H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h144L96 64v112c0 26.5-21.49 48-48 48S0 202.5 0 176v-16c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v16c0 8.8 7.16 16 16 16s16-7.2 16-16V32C64 14.33 78.33 0 96 0zm480 256v-18.7L498.7 160H448v96h128zM160 368c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm320 96c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

const SvgTruckTowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckTowSolid;
