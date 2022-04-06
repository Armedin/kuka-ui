import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zM48.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l193.7-150.6C457.5 158.2 416 116.1 416 64H80c-26.51 0-48 21.49-48 48 0 13 6.01 25.3 16.29 33.3zM288 352c-16.53 0-33.07-5.318-47.17-16.3L32 173.3V400c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V173.3L335.2 335.8C321.1 346.7 304.5 352 288 352z" />
  </svg>
);

const SvgEnvelopeDotSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEnvelopeDotSolid;
