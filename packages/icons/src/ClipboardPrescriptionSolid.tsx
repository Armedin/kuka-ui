import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M176 240h-48v32h48c8.9 0 16-7.1 16-16s-7.1-16-16-16zM336 64h-53.88C268.9 26.8 233.7 0 192 0s-76.9 26.8-90.1 64H48C21.5 64 0 85.48 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.48 48-48V112c0-26.52-21.5-48-48-48zm-144 0c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.3-32-32c0-17.67 14.3-32 32-32zm112 368-11.25 11.25c-6.25 6.25-16.5 6.25-22.75 0l-30-29.95-30 30c-6.25 6.25-16.5 6.25-22.75 0L176 432c-6.25-6.25-6.25-16.38 0-22.62l29.1-30.12L146.8 320H128v48c0 8.9-7.1 16-16 16H96c-8.875 0-16-7.125-16-16V208c0-8.9 7.13-16 16-16h80c35.38 0 64 28.62 64 64 0 24.25-13.62 45-33.5 55.88L240 345.4l29.88-29.88c6.25-6.25 16.38-6.25 22.62 0l11.38 11.25c6.25 6.25 6.25 16.38 0 22.62l-30 30L304 409.4c6.3 6.2 6.3 16.4 0 22.6z" />
  </svg>
);

const SvgClipboardPrescriptionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClipboardPrescriptionSolid;
