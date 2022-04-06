import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 256h-26.75l3.562-32h-32.09l-21.19 192H92.47L71.28 224H39.06l3.562 32H16c-8.801 0-16 7.2-16 16s7.199 16 16 16h30.25L64 448v16c0 8.8 7.16 16 16 16s16-7.2 16-16v-16h384v16c0 8.836 7.164 16 16 16s16-7.164 16-16v-16l17.75-160H560c8.8 0 16-7.2 16-16s-7.2-16-16-16zM16 192h544c10.38 0 17.1-12.25 15.5-24.88l-32-120C541.8 38.25 535.3 32 528 32H48c-7.25 0-13.75 6.25-15.5 15.13l-32 120C-2 179.8 5.625 192 16 192zM514.3 64l27.12 96h-78.63L443.5 64h70.8zM304 64h106.9l19.25 96H304V64zm-138.9 0H272v96H145.9l19.2-96zM61.75 64h70.75l-19.3 96H34.63l27.12-96z" />
  </svg>
);

const SvgDumpster = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDumpster;
