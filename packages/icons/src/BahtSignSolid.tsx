import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M176 32v32c61.9 0 112 50.1 112 112 0 24.2-7.7 46.6-20.7 64.9 31.6 19.8 52.7 55 52.7 95.1 0 61.9-50.1 112-112 112h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H41.74C18.69 448 0 429.3 0 406.3V101.6C0 80.82 16.82 64 37.57 64H112V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-64 96H64v96h48v-96zm112 48c0-26.5-21.5-48-48-48v96c26.5 0 48-21.5 48-48zM112 288H64v96h48v-96zm96 96c26.5 0 48-21.5 48-48s-21.5-48-48-48h-32v96h32z" />
  </svg>
);

const SvgBahtSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBahtSignSolid;
