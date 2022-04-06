import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m93.31 107.1 98.69 148V116.8c0-15.8 20.5-22.01 29.3-9.7l98.7 148V116.8c0-15.8 20.5-22.01 29.3-9.7l98.7 148V116.8c0-15.8 20.5-22.01 29.3-9.7l129.5 195.1c14.2 21.3-1 48.9-26.6 48.9H64V116.8c0-15.8 20.53-22.01 29.31-9.7zm486.89 212L480 169.7v149.4h100.2zM352 169.7v149.4h100.2L352 169.7zm-128 0v149.4h100.2L224 169.7zm-128 0v149.4h100.2L96 169.7zm528 245.4c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16H16c-8.836 0-16-6.3-16-16 0-7.9 7.164-16 16-16h608z" />
  </svg>
);

const SvgRoadSpikes = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRoadSpikes;
