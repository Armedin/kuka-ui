import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M320 35.57V3.114C432 20.69 519.9 110.9 534 224h-32.3C488.1 128.6 414.3 52.57 320 35.57zm0 473.33v-32.5c94.3-17 168.1-93 181.7-188.4H534c-14.1 113.1-102 203.3-214 220.9zM25.98 288h32.29C72.68 388.8 154.1 467.9 256 478.7v32.2C136.4 499.8 40.75 406.5 25.98 288zM256 1.117V33.28C154.1 44.13 72.68 123.3 58.27 224H25.98C40.75 105.6 136.5 12.23 256 1.117zM208 240h160v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96H208v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16v96z" />
  </svg>
);

const SvgHelicopterSymbol = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHelicopterSymbol;
