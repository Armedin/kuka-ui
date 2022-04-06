import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M464 0H240c-8.9 0-16 7.125-16 16v112H64V16c0-8.875-7.12-16-16-16H16C7.125 0 0 7.125 0 16v480c0 8.9 7.125 16 16 16h32c8.88 0 16-7.1 16-16v-48h448v48c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16V112C576 50.12 525.9 0 464 0zm48 267.3c-15-7.4-31.4-11.2-48-11.3H240c-8.9 0-16 7.1-16 16v112H64V192h448v75.3zM144 352c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm0-256c26.5 0 48-21.5 48-48S170.5 0 144 0 96 21.5 96 48s21.5 48 48 48z" />
  </svg>
);

const SvgBedBunkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBedBunkSolid;
