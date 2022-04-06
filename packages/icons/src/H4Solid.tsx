import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M608 64.01c-17.67 0-32 14.31-32 32v159.1H441l38.06-152.2c4.281-17.12-6.141-34.5-23.28-38.78-17.05-4.25-34.52 6.094-38.81 23.28l-48 191.1a31.962 31.962 0 0 0 5.828 27.44C380.8 315.5 390.1 320 400 320h176v96c0 17.69 14.33 32 32 32s32-14.31 32-32V96c0-17.67-14.3-31.99-32-31.99zm-320 0c-17.67 0-32 14.31-32 32v128H64v-128c0-17.69-14.33-32-32-32s-32 14.31-32 32v320c0 17.69 14.33 32 32 32s32-14.31 32-32v-128h192v128c0 17.69 14.33 32 32 32s32-14.31 32-32v-320c0-17.68-14.3-32-32-32z" />
  </svg>
);

const SvgH4Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH4Solid;
