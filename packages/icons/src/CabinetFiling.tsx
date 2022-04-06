import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V272h384v176zm0-208H32V64c0-17.67 14.33-32 32-32h320c17.67 0 32 14.33 32 32v176zM304 96H144c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM144 416c8.8 0 16-7.2 16-16v-16h128v16c0 8.844 7.156 16 16 16s16-7.156 16-16v-32c0-8.844-7.156-16-16-16H144c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgCabinetFiling = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCabinetFiling;
