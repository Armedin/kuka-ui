import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c35.3 0 64 28.65 64 64v288c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V64c0-35.35 28.7-64 64-64h352zM280 72c-13.3 0-24 10.75-24 24 0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24 0-13.25-10.7-24-24-24H280zm-88 56c17.7 0 32-14.3 32-32 0-17.67-14.3-32-32-32s-32 14.33-32 32c0 17.7 14.3 32 32 32zM48 376c0 48.6 39.4 88 88 88h320c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.89 512 0 451.1 0 376V120c0-13.3 10.75-24 24-24s24 10.7 24 24v256z" />
  </svg>
);

const SvgBrowsersSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBrowsersSolid;
