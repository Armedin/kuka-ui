import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M105.4 182.6c12.5 12.49 32.76 12.5 45.25.001L224 109.3V352c0 17.67 14.33 32 32 32s32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001 12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0s-16.4 3.125-22.6 9.375L105.4 137.4c-12.52 12.5-12.52 32.7 0 45.2zM480 352H320c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm-48 104c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z" />
  </svg>
);

const SvgUploadSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUploadSolid;
