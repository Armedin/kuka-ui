import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M320 224h96c17.67 0 32-14.33 32-32s-14.33-32-32-32h-95.1c-17.67 0-32 14.33-32 32s13.4 32 31.1 32zm0 128h160c17.67 0 32-14.33 32-32s-14.33-32-32-32H320.9c-17.67 0-32 14.33-32 32s13.4 32 31.1 32zm0-256h32c17.67 0 31.1-14.33 31.1-32S368.77 32 352 32h-32c-17.67 0-32 14.33-32 32s14.3 32 32 32zm224 320H320.9c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32s-14.3-32-32-32zm-351.6-85.3L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38a31.872 31.872 0 0 0-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z" />
  </svg>
);

const SvgArrowDownShortWideSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownShortWideSolid;
