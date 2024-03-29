import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M272 448H48c-26.51 0-48 21.5-48 48 0 8.8 7.164 16 16 16h288c8.836 0 16-7.164 16-16 0-26.5-21.5-48-48-48zM8 287.9c0 51.63 22.12 73.88 56 84.63V416h192v-43.5c33.88-10.75 56-33 56-84.63 0-30.62-10.75-67.13-26.75-102.5L185 285.6a7.968 7.968 0 0 1-5.651 2.349 7.931 7.931 0 0 1-5.63-2.339l-11.35-11.27a7.996 7.996 0 0 1-2.339-5.672 8.03 8.03 0 0 1 2.349-5.693l107.9-107.9C249.5 117.3 223.8 83 199.4 62.5 213.4 59.13 224 47 224 32c0-17.62-14.38-32-32-32h-64c-17.6 0-32 14.38-32 32 0 15 10.62 27.12 24.62 30.5C67.75 106.8 8 214.5 8 287.9z" />
  </svg>
);

const SvgChessBishopSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChessBishopSolid;
