import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm272 144h208V96c0-17.67-14.3-32-32-32H272v176zM240 64H64c-17.67 0-32 14.33-32 32v144h208V64zM32 272v144c0 17.7 14.33 32 32 32h176V272H32zm240 176h176c17.7 0 32-14.3 32-32V272H272v176z" />
  </svg>
);

const SvgTableCellsLarge = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTableCellsLarge;
