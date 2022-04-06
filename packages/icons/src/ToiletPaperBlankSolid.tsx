import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M127.1 0C74.98 0 31.98 86 31.98 192v172.1c0 41.12-9.751 62.75-31.13 126.9-3.5 10.2 4.251 21 15.13 21h280.9c13.88 0 26-8.75 30.38-21.88 12.88-38.5 24.75-72.37 24.75-126L351.1 192c0-83.62 23.62-153.5 60.5-192H127.1zm352 0c-53 0-96 86.06-96 192.1 0 106 43 191.9 96 191.9S576 298 576 192 532.1 0 479.1 0zm0 256c-17.63 0-32-28.62-32-64s14.38-64 32-64c17.63 0 32 28.62 32 64s-13.5 64-32 64z" />
  </svg>
);

const SvgToiletPaperBlankSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToiletPaperBlankSolid;
