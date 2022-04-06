import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M336 96c8.8 0 16-7.16 16-16s-7.2-16-16-16l-48 .01c-5.469 0-10.56 2.79-13.5 7.399L176 226.2 77.5 71.41a16.01 16.01 0 0 0-13.5-7.4L16 64C7.156 64 0 71.16 0 80s7.156 16 16 16h39.22l101.8 160-101.8 160H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h48c5.469 0 10.56-2.804 13.5-7.414L176 285.8l98.5 154.8a16.024 16.024 0 0 0 13.5 7.414l48-.014c8.844 0 16-7.156 16-16s-7.2-16-16-16h-39.22L194.1 256 295.9 96H336zm160 64h-32V16c0-8.844-7.2-16-16-16h-32c-8.844 0-16 7.156-16 16s7.2 16 16 16h16v128h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgSuperscript = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSuperscript;
