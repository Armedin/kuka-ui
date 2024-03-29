import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0s-76.9 26.8-90.1 64H48C21.5 64 0 85.48 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.48 48-48V112c0-26.52-21.5-48-48-48zm-144 0c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.3-32-32c0-17.67 14.3-32 32-32zM96 392c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24zm16-104c-4.1 0-8.2-1.6-11.3-4.7l-32-32c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L112 249.4l52.69-52.69c6.25-6.25 16.38-6.25 22.62 0s6.25 16.38 0 22.62l-64 64A16.12 16.12 0 0 1 112 288zm192 96H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.801 0 16 7.199 16 16 0 8.8-7.2 16-16 16zm0-96h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
  </svg>
);

const SvgClipboardListCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClipboardListCheckSolid;
