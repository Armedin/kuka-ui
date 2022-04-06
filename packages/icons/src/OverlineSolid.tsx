import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 128c-97.84 0-177.5 79.63-177.5 177.5v29.06c0 97.84 79.63 177.5 177.5 177.5s177.5-79.62 177.5-177.5V305.5c0-97.9-79.7-177.5-177.5-177.5zm113.5 206.5c0 62.56-50.91 113.5-113.5 113.5s-113.5-50.91-113.5-113.5v-29c0-62.56 50.91-113.5 113.5-113.5s113.5 50.91 113.5 113.5v29zM416 .015H32c-17.69 0-32 14.31-32 31.1s14.31 32 32 32h384c17.69 0 32-14.31 32-32s-14.3-31.1-32-31.1z" />
  </svg>
);

const SvgOverlineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOverlineSolid;
