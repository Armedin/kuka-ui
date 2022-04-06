import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M608 128c-8.801 0-16 7.199-16 16v160c0 26.51-21.49 48-48 48h-16V144c0-8.8-7.2-16-16-16s-16 7.199-16 16v208h-64V144c0-8.8-7.2-16-16-16s-16 7.199-16 16v208h-64V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v208h-64V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v208h-64V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v208H96c-26.51 0-48-21.49-48-48V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 44.2 35.82 80 80 80h208v96H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.801 0 16-7.201 16-16 0-8.801-7.199-16-16-16H336v-96h208c44.18 0 80-35.82 80-80V144c0-8.8-7.2-16-16-16zM32 95.1c8.844 0 16-7.156 16-15.1V16c0-8.844-7.156-16-16-16S16 7.156 16 16v64c0 8.84 7.16 15.1 16 15.1zm96 0c8.844 0 16-7.156 16-15.1V16c0-8.844-7.156-16-16-16s-16 7.156-16 16v64c0 8.84 7.2 15.1 16 15.1zm96 0c8.844 0 16-7.156 16-15.1V16c0-8.844-7.156-16-16-16s-16 7.156-16 16v64c0 8.84 7.2 15.1 16 15.1zm96 0c8.844 0 16-7.156 16-15.1V16c0-8.844-7.156-16-16-16s-16 7.156-16 16v64c0 8.84 7.2 15.1 16 15.1zm96 0c8.844 0 16-7.156 16-15.1V16c0-8.844-7.156-16-16-16s-16 7.156-16 16v64c0 8.84 7.2 15.1 16 15.1zm96 0c8.844 0 16-7.156 16-15.1V16c0-8.844-7.156-16-16-16s-16 7.156-16 16v64c0 8.84 7.2 15.1 16 15.1zM608 0c-8.844 0-16 7.156-16 16v64c0 8.844 7.156 15.1 16 15.1s16-6.26 16-15.1V16c0-8.844-7.2-16-16-16z" />
  </svg>
);

const SvgMenorah = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMenorah;
