import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M127.1 248.3c0-15.3 8.1-29.6 20.4-38.7L420.6 8.398C428 2.943 436.1 0 446.2 0c11.4 0 22.3 4.539 30.4 12.62l54.8 54.76c8.1 8.08 11.7 19.04 11.7 30.46 0 9.16-2 17.26-7.5 25.56L334.4 396.5c-9.1 12.3-24.3 19.5-38.7 19.5h-72.6l-24.5 25.4c-12.5 12.5-32.7 12.5-45.2 0l-50.8-50.8c-12.47-12.5-12.47-32.7 0-45.2l24.5-25.4v-71.7zM229 229l85.1 85.1L473.4 99.92l-29.3-29.33L229 229zm-88.3 244.9-31 30.2c-4.5 5.4-10.65 7.9-17.01 7.9H24c-13.25 0-24-10.7-24-24v-4.7c0-7.2 2.529-12.5 7.029-17l63.031-63 70.64 70.6zM552 464c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24s10.7-24 24-24h328z" />
  </svg>
);

const SvgHighlighterLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHighlighterLineSolid;
