import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 352H416l-32 32-31.1-32h-64v32c0 52.88-43 96-96 96h272c60.7 0 110.7-49.7 111.1-111.3.1-9.1-6.9-16.7-16-16.7zM48 32C21.5 32 0 53.5 0 80l-.001 64c0 8.875 7.125 16 15.1 16H96V80c0-26.5-21.5-48-48-48zm208 348.6V320h223.1l.9-32.9-4.342-4.343c-.144-.125-.254-.129-.406-.281L448 256l31.1-31.1v-32L448 160l31.1-32s.126-2.75-.249-7.25C476 71.13 434.5 32 384 32H111.6C121.8 45.38 128 61.88 128 80v112l4.345 4.344c.144.125.254.129.406.281L160 224l-32 32v128c0 38.88 34.63 69.63 74.75 63.13C234.3 442 256 412.5 256 380.6z" />
  </svg>
);

const SvgScrollOldSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScrollOldSolid;
