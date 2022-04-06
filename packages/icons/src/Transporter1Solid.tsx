import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M336 320H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16zm0 64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16zM256 96c26.5 0 48-21.5 48-48S282.5 0 256 0s-48 21.5-48 48 21.5 48 48 48zM152.6 276.5l31.38-37.75L184 288h144l.006-49.25 31.38 37.75c11.38 13.5 31.5 15.38 45.13 4.125 13.5-11.38 15.38-31.5 4.125-45.13l-70.5-84.5C326 136.4 308 128 289 128h-66c-19 0-37 8.375-49.12 23l-70.5 84.5c-11.25 13.62-9.5 33.75 4.125 45.13C121.1 291.9 141.3 290 152.6 276.5zm357.2-104.1L480 160l-12.38-29.75c-.72-1.35-2.12-2.25-3.62-2.25s-2.875.875-3.625 2.25L448 160l-29.75 12.38c-1.35.72-2.25 2.12-2.25 3.62s.875 2.875 2.25 3.625L448 192l12.38 29.75c.72 1.35 2.12 2.25 3.62 2.25s2.875-.875 3.625-2.25L480 192l29.75-12.38c1.35-.72 2.25-2.12 2.25-3.62s-.9-2.9-2.2-3.6zM384 448H128c-17.62 0-32 14.38-32 32v32h320v-32c0-17.6-14.4-32-32-32zM93.75 364.4 64 352l-12.38-29.75C50.88 320.9 49.5 320 48 320s-2.875.875-3.625 2.25L32 352 2.25 364.38C.875 365.1 0 366.5 0 368s.875 2.875 2.25 3.625L32 384l12.38 29.75C45.13 415.1 46.5 416 48 416s2.875-.875 3.625-2.25L64 384l29.75-12.38C95.13 370.9 96 369.5 96 368s-.87-2.9-2.25-3.6z" />
  </svg>
);

const SvgTransporter1Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTransporter1Solid;
