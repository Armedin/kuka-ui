import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M112 48c0-26.51 21.5-48 48-48s48 21.49 48 48-21.5 48-48 48-48-21.49-48-48zm56 80h6.9c33.7 0 64.9 17.7 82.3 46.6l58.2 96.9c9.1 15.2 4.2 34.8-10.9 43.9-15.2 9.1-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zM58.18 182.3C78.06 149.2 113.5 128.8 152 128v352.2c-.1 17.6-14.4 31.8-32 31.8-17.7 0-32-14.3-32-32v-96H70.2c-10.92 0-18.63-10.7-15.18-21.1l38.26-114.8-33.85 56.4c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.051-28.7-10.947-43.9l53.607-89.2z" />
  </svg>
);

const SvgPersonHalfDressSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonHalfDressSolid;
