import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M48 32c-8.84 0-16 7.16-16 16v96c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V48C0 21.49 21.49 0 48 0h96c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16H48zm112 112v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16zm32 0c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144zm224 0c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144zm-128 0v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16zm48 0c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144zm208-96c0-8.84-7.2-16-16-16h-96c-8.8 0-16-7.16-16-16 0-8.836 7.2-16 16-16h96c26.5 0 48 21.49 48 48v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V48zM144 480c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-26.51 0-48-21.5-48-48v-96c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v96c0 8.8 7.16 16 16 16h96zm400-112c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 26.5-21.5 48-48 48h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16-7.2 16-16v-96z" />
  </svg>
);

const SvgBarcodeRead = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBarcodeRead;
