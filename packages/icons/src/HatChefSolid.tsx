import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 32c-20.88.125-41.13 7-57.75 19.75C334.9 20.5 297.1 0 256 0c-42.9 0-78.9 20.5-102.2 51.75-29-22.25-68-26-100.6-9.75C20.38 58.12-.125 91.5 0 128c0 41.75 64 192 64 192h74.45L112.2 162.7c-1.4-9.6 4.4-17 13.1-18.5 8.562-1.594 16.98 4.336 18.45 13.09L170.9 320H240V160c0-8.844 7.156-16 16-16s16 7.156 16 16v160h69.12l27.12-162.7c1.469-8.75 9.984-14.68 18.45-13.09 8.719 1.438 14.55 9.742 13.09 18.46L373.6 320H448s64-150.3 64-192c0-53-43-96-96-96zM64 480c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V352H64v128z" />
  </svg>
);

const SvgHatChefSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHatChefSolid;
