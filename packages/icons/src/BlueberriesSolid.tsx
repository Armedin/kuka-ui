import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M336 0c-80.7 0-148.6 54.39-169.3 128.5 3.1-.2 6.2-.5 9.3-.5 114.7 0 208 93.31 208 208 0 3.146-.333 6.211-.472 9.324C457.6 324.6 512 256.7 512 176 512 78.8 433.2 0 336 0zm80 128h-32v32c0 8.844-7.156 16-16 16s-16-7.2-16-16v-32h-32c-8.844 0-16-7.156-16-16s7.2-16 16-16h32V64c0-8.844 7.156-16 16-16s16 7.16 16 16v32h32c8.844 0 16 7.156 16 16s-7.2 16-16 16zm-240 32C78.8 160 0 238.8 0 336s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm48 128h-32v32c0 8.844-7.156 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.844 7.156-16 16-16s16 7.2 16 16v32h32c8.844 0 16 7.156 16 16s-7.2 16-16 16z" />
  </svg>
);

const SvgBlueberriesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlueberriesSolid;
