import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 448h80v-32c0-8.838 7.164-16 16-16 8.838 0 16 7.162 16 16v32h96v-32c0-8.838 7.164-16 16-16 8.838 0 16 7.162 16 16v32h96v-32c0-8.838 7.164-16 16-16 8.838 0 16 7.162 16 16v32h96v-32c0-8.838 7.164-16 16-16 8.838 0 16 7.162 16 16v32h80v-96H0v96zm576-301.1V112c0-26.51-21.5-48-48-48H48C21.49 64 0 85.49 0 112v34.94C18.6 153.5 32 171.1 32 192s-13.4 38.5-32 45.1V320h576v-82.9c-18.6-6.6-32-24.2-32-45.1s13.4-38.5 32-45.1zM192 240c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v96zm128 0c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v96zm128 0c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v96z" />
  </svg>
);

const SvgMemorySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMemorySolid;
