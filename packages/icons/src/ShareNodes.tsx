import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 112c0 44.2-35.8 80-80 80-22.9 0-43.6-9.6-58.1-25.9l-151 76.4c.7 4.4 1.1 8.9 1.1 13.5s-.4 9.1-1.1 13.5l151 75.5c14.5-15.4 35.2-25 58.1-25 44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80c0-9.7 1.7-19.9 4.9-27.7l-145.7-72.8c-14.3 22-39 36.5-67.2 36.5-44.18 0-80-35.8-80-80s35.82-80 80-80c28.2 0 52.9 14.5 67.2 36.5l145.7-72.8c-3.2-8.7-4.9-18-4.9-27.7 0-44.18 35.8-80 80-80s80 35.82 80 80zM79.1 304c27.4 0 48-21.5 48-48s-20.6-48-48-48c-25.61 0-48 21.5-48 48s22.39 48 48 48zM368 64c-26.5 0-48 21.49-48 48 0 26.5 21.5 48 48 48s48-21.5 48-48c0-26.51-21.5-48-48-48zm0 384c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

const SvgShareNodes = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShareNodes;
