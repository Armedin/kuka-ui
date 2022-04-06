import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 32H240v176h176V96c0-17.67-14.3-32-32-32zm32 208H240v176h144c17.7 0 32-14.3 32-32V272zm-208-32V64H64c-17.67 0-32 14.33-32 32v144h176zM32 272v144c0 17.7 14.33 32 32 32h144V272H32z" />
  </svg>
);

const SvgBorderAll = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBorderAll;
