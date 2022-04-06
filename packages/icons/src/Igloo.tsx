import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 320v96c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-96C0 160.9 128.9 32 288 32s288 128.9 288 288zm-32 32H384v96h128c17.7 0 32-14.3 32-32v-64zm0-32c0-46.6-12.5-90.3-34.2-128H480v128h64zM128 192v128h69.5c13.1-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H448V192H128zM32 352v64c0 17.7 14.33 32 32 32h128v-96H32zm64-32V192H66.25C44.47 229.7 32 273.4 32 320h64zM352 72.07V160h135.9c-34.1-42.5-81.5-73.94-135.9-87.93zM288 64c-80.8 0-152.9 37.5-199.85 96H320V65.98C309.5 64.67 298.8 64 288 64zm0 224c-35.3 0-64 28.7-64 64v96h128v-96c0-35.3-28.7-64-64-64z" />
  </svg>
);

const SvgIgloo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIgloo;
