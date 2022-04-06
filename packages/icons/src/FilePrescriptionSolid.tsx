import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M176 240h-48v32h48c8.9 0 16-7.1 16-16s-7.1-16-16-16zM256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm68.5 187.5 11.38 11.25c6.25 6.25 6.25 16.38 0 22.62l-29.88 30 30 30.03c6.25 6.25 6.25 16.38 0 22.62l-11.25 11.38c-6.25 6.25-16.5 6.25-22.75 0l-30-30.1-30 30c-6.249 6.25-16.48 6.266-22.73.016L176 432c-6.25-6.25-6.25-16.38 0-22.62l29.1-30.12L146.8 320H128l.008 48.01c0 8.875-7.125 16-16 16L96 384c-8.875 0-16-7.125-16-16V208c0-8.9 7.13-16 16-16h80c35.38 0 64 28.62 64 64 0 24.25-13.62 45-33.5 55.88L240 345.4l29.88-29.88c6.22-6.22 16.42-6.22 22.62-.02z" />
  </svg>
);

const SvgFilePrescriptionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilePrescriptionSolid;
