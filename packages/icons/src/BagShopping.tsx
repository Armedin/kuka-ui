import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 128V96c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96v32h80c26.5 0 48 21.5 48 48v240c0 53-43 96-96 96H96c-53.02 0-96-43-96-96V176c0-26.5 21.49-48 48-48h80zm32 0h128V96c0-35.35-28.7-64-64-64s-64 28.65-64 64v32zM48 160c-8.84 0-16 7.2-16 16v240c0 35.3 28.65 64 64 64h256c35.3 0 64-28.7 64-64V176c0-8.8-7.2-16-16-16h-80v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H160v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H48z" />
  </svg>
);

const SvgBagShopping = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBagShopping;
