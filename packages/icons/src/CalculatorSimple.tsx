import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M336 128h48v48c0 8.844 7.156 16.04 16 16.04s16-7.24 16-16.04v-48h48c8.8 0 16-7.1 16-16s-7.2-16-16-16h-48V48c0-8.844-7.156-15.96-16-15.96S384 39.16 384 48v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16zM168.6 343.4c-6.254-6.254-16.37-6.254-22.63 0l-33.97 34-33.94-33.94c-6.254-6.254-16.37-6.254-22.63 0s-6.254 16.37 0 22.63L89.37 400l-33.94 33.94c-6.254 6.254-6.254 16.37 0 22.63s16.37 6.254 22.63 0L112 422.6l33.94 33.94c6.254 6.254 16.37 6.254 22.63 0s6.254-16.37 0-22.63L134.6 400l33.94-33.94c6.26-6.26 6.26-16.36.06-22.66zM48 128h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H48c-8.84 0-16 7.2-16 16s7.16 16 16 16zm448 112H272V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v224H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h224v224c0 8.844 7.156 16 16 16s16-7.156 16-16V272h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-32 176H336c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16s-7.2-16-16-16zm0-64H336c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgCalculatorSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalculatorSimple;
