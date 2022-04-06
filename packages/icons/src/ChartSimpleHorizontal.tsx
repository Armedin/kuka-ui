import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 272c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-32c0-26.5 21.49-48 48-48h352c26.5 0 48 21.5 48 48v32zm-48-48H48c-8.84 0-16 7.2-16 16v32c0 8.8 7.16 16 16 16h352c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM256 432c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-32c0-26.5 21.49-48 48-48h160c26.5 0 48 21.5 48 48v32zm-48-48H48c-8.84 0-16 7.2-16 16v32c0 8.8 7.16 16 16 16h160c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM48 160c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h288c26.5 0 48 21.49 48 48v32c0 26.5-21.5 48-48 48H48zm304-48V80c0-8.84-7.2-16-16-16H48c-8.84 0-16 7.16-16 16v32c0 8.8 7.16 16 16 16h288c8.8 0 16-7.2 16-16z" />
  </svg>
);

const SvgChartSimpleHorizontal = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartSimpleHorizontal;
