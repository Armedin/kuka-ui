import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M544 320H96c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm0 160H96c-35.25 0-64-28.75-64-64s28.75-64 64-64h448c35.25 0 64 28.75 64 64s-28.7 64-64 64zm-416-88c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.7 24-24-10.7-24-24-24zm192 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.3-10.7-24-24-24zm192 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.3-10.7-24-24-24z" />
  </svg>
);

const SvgConveyorBeltEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgConveyorBeltEmpty;
