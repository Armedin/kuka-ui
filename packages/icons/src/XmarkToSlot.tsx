import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M80 416h416c8.836 0 16-7.164 16-16s-7.2-16-16-16h-16V80c0-26.51-21.5-48-48-48H144c-26.5 0-48 21.49-48 48v304H80c-8.84 0-16 7.2-16 16s7.16 16 16 16zm48-336c0-8.84 7.2-16 16-16h288c8.8 0 16 7.16 16 16v304H128V80zm400 240c-8.844 0-16 7.156-16 16s7.156 16 16 16c8.812 0 16 7.172 16 16v64c0 8.828-7.188 16-16 16H48c-8.81 0-16-7.2-16-16v-64c0-8.8 7.19-16 16-16 8.84 0 16-7.2 16-16s-7.16-16-16-16c-26.47 0-48 21.5-48 48v64c0 26.5 21.53 48 48 48h480c26.47 0 48-21.53 48-48v-64c0-26.5-21.5-48-48-48zM363.3 132.7c-6.25-6.25-16.38-6.25-22.62 0L288 185.4l-52.7-52.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L265.4 208l-52.7 52.7c-6.25 6.25-6.25 16.38 0 22.62 6.246 6.246 16.37 6.254 22.62 0L288 230.6l52.69 52.69c6.246 6.246 16.37 6.254 22.62 0 6.25-6.25 6.25-16.38 0-22.62L310.6 208l52.69-52.69c6.31-6.21 6.31-16.41.01-22.61z" />
  </svg>
);

const SvgXmarkToSlot = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgXmarkToSlot;