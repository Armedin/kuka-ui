import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M376 368c-39.75 0-72 32.25-72 72 0 8.5 1.75 16.5 4.375 24H256V256c0-17.62-14.38-32-32-32h-64v48c0 8.875-7.125 15.1-16 15.1s-16-6.2-16-15.1v-48H96c-17.62 0-32 14.4-32 32v208H16c-8.875 0-16 7.1-16 16v16c0 8.9 7.105 16 15.98 16H376c39.75 0 72-32.25 72-72s-32.2-72-72-72zm0 96c-13.25 0-24-10.75-24-24s10.8-24 24-24 24 10.75 24 24-10.7 24-24 24zM160 191.1c45.88 0 77.1-32.62 77.1-79.25 0-29.1-31.7-73.97-77.1-111.85-45.6 38-78.9 82.88-78.9 112.8 0 46.6 33 78.3 78.9 78.3z" />
  </svg>
);

const SvgCandleHolderSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCandleHolderSolid;
