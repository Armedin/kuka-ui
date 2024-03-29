import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M93.75 300.4 64 288l-12.37-29.7c-.75-1.4-2.13-2.3-3.63-2.3s-2.87.9-3.62 2.3L32 288 2.25 300.4C.875 301.1 0 302.5 0 304s.875 2.875 2.25 3.625L32 320l12.38 29.75C45.13 351.1 46.5 352 48 352s2.875-.875 3.625-2.25L64 320l29.75-12.38C95.13 306.9 96 305.5 96 304s-.87-2.9-2.25-3.6zM509.8 76.38 480 64l-12.38-29.75C466.9 32.88 465.5 32 464 32s-2.875.875-3.625 2.25L448 64l-29.75 12.38C416.9 77.13 416 78.5 416 80s.875 2.875 2.25 3.625L448 96l12.38 29.75c.72 1.35 2.12 2.25 3.62 2.25s2.875-.875 3.625-2.25L480 96l29.75-12.38C511.1 82.88 512 81.5 512 80s-.9-2.87-2.2-3.62zM384 448H128c-17.62 0-32 14.38-32 32v32h320v-32c0-17.6-14.4-32-32-32z" />
  </svg>
);

const SvgTransporter7Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTransporter7Solid;
