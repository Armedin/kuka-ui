import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M0 96c0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.5-21.49 48-48 48S0 122.5 0 96zm0 160c0-26.5 21.49-48 48-48s48 21.5 48 48-21.49 48-48 48-48-21.5-48-48zm96 160c0 26.5-21.49 48-48 48S0 442.5 0 416s21.49-48 48-48 48 21.5 48 48zm64-320c0-26.51 21.5-48 48-48s48 21.49 48 48c0 26.5-21.5 48-48 48s-48-21.5-48-48zm96 160c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-96 160c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z" />
  </svg>
);

const SvgGripDotsVerticalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGripDotsVerticalSolid;
