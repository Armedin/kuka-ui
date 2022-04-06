import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M272 32c26.5 0 48 21.49 48 48v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h224zm0 32H48c-8.84 0-16 7.16-16 16v128c0 8.8 7.16 16 16 16h224c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zm256-32c26.5 0 48 21.49 48 48v256c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h96zm0 32h-96c-8.8 0-16 7.16-16 16v256c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zM64 352c0-26.5 21.49-48 48-48h176c26.5 0 48 21.5 48 48v80c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48v-80zm32 0v80c0 8.8 7.2 16 16 16h176c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z" />
  </svg>
);

const SvgRectanglesMixed = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectanglesMixed;
