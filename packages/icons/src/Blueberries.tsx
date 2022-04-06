import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 160C78.8 160 0 238.8 0 336s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 320c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144zM336 0c-67.97 0-128.7 38.02-158.4 99.2-3.8 7.9-.5 17.5 7.4 21.4 7.969 3.844 17.53.547 21.41-7.406C230.7 63.11 280.4 32 336 32c79.4 0 144 64.59 144 144 0 54.78-31.88 105.7-81.19 129.6-7.938 3.859-11.25 13.44-7.406 21.38A16.025 16.025 0 0 0 405.8 336c2.344 0 4.75-.516 7-1.609C473.1 305.1 512 242.1 512 176 512 78.95 433 0 336 0zM208 272h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-32c-8.8 0-16 7.2-16 16s7.156 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.156 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm208-144c0-8.844-7.156-16-16-16h-32V80c0-8.84-7.2-16-16-16s-16 7.156-16 16v32h-32c-8.8 0-16 7.2-16 16s7.156 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.156 16-16v-32h32c8.8 0 16-7.2 16-16z" />
  </svg>
);

const SvgBlueberries = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlueberries;
