import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 309.1c0-7.05-2.318-14.15-7.127-20.07l-224-277.1C274.5 3.1 265.2 0 256 0c-9.2 0-18.5 3.1-24.9 11.88l-224 277.1C2.318 294.9 0 302 0 309.1c0 9.625 4.319 19.15 12.62 25.43l224 170.1C242.4 509.9 249.1 512 256 512c6.875 0 13.62-2.135 19.37-6.51l224-170.1C507.7 328.2 512 318.7 512 309.1zm-479.99 0L240 51.75v416L32.01 309.1zM271.1 467.9v-416l207.1 257.3-207.1 158.7z" />
  </svg>
);

const SvgDiceD4 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiceD4;
