import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m416 384 32 96H128l32-96h256zM576 96v336c0 26.51-21.49 48-48 48h-46.27l-35.37-106.1A31.956 31.956 0 0 0 416 352H159.1c-13.77 0-26 8.813-30.36 21.88L94.27 480H48c-26.51 0-48-21.5-48-48V96c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64zM176 224c0-17.62-14.38-32-32-32s-32 14.38-32 32 14.38 32 32 32 32-14.4 32-32zm160 0c0-11.28 2.305-21.95 5.879-32H234.1c3.6 10.1 5.9 20.7 5.9 32s-2.3 21.9-5.9 32h107.8c-3.6-10.1-5.9-20.7-5.9-32zm128 0c0-17.62-14.38-32-32-32s-32 14.38-32 32 14.38 32 32 32 32-14.4 32-32z" />
  </svg>
);

const SvgCassetteTapeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCassetteTapeSolid;
