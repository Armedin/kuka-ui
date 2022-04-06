import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v85.8c0 9.748 11.25 15.45 19.12 9.699L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm-80 264c0 13.3-10.7 24-24 24s-24-10.7-24-24v-70.1l-96 96c-9.381 9.381-24.56 9.373-33.94 0-9.36-9.3-9.36-24.5.04-33.9l96-96H216c-13.2 0-24-10.7-24-24s10.8-24 24-24h128c13.25 0 24 10.75 24 24v128z" />
  </svg>
);

const SvgMessageArrowUpRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageArrowUpRightSolid;
