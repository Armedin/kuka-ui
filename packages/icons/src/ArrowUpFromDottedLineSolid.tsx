import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 416c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm-192 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm342.6-246.6-128-128c-12.5-12.5-32.75-12.5-45.25 0l-128 128c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 141.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V141.3l73.38 73.38C335.6 220.9 343.8 224 352 224s16.38-3.125 22.62-9.375C387.1 202.1 387.1 181.9 374.6 169.4zM320 416c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgArrowUpFromDottedLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpFromDottedLineSolid;
