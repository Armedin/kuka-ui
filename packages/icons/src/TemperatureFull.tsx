import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M256 96c0-53-43-95.1-96-95.1S64 43 64 96v203.4c-19.75 22.38-31.87 51.75-31.1 84-1.27 70.2 55.85 128.1 126.2 128.6h.874C230.7 512 288 454.8 288 384c0-32.5-12.12-62.13-31.1-84.63V96zm-96 384h-.6c-52.75-.375-95.62-43.75-95.37-96.5.25-39.5 22.5-61.38 31.1-72V96c0-35.25 28.75-64 63.1-64s63.1 28.75 63.1 64v215.5C233.1 321.9 256 344.1 256 384c0 52.9-43.1 96-96 96zm48-96c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.88 13.37-38.63 31.1-45.25V96c0-8.875 7.125-16 15.1-16s15.1 7.125 15.1 16v242.8c21.3 6.6 34.7 24.3 34.7 45.2z" />
  </svg>
);

const SvgTemperatureFull = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTemperatureFull;
