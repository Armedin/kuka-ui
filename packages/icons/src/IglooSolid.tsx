import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M320 160H48.5C100.2 82.82 188.1 32 288 32c10.8 0 21.5.6 32 1.76V160zm32-120.86C424.9 55.67 487.2 99.82 527.5 160H352V39.14zM96 192v128H0c0-46 10.77-89.4 29.94-128H96zm96 128h-64V192h320v128h-64v32h192v80c0 26.5-21.5 48-48 48H352V352c0-35.3-28.7-64-64-64s-64 28.7-64 64v128H48c-26.51 0-48-21.5-48-48v-80h192v-32zm288-128h66.1c19.1 38.6 29.9 82 29.9 128h-96V192z" />
  </svg>
);

const SvgIglooSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIglooSolid;
