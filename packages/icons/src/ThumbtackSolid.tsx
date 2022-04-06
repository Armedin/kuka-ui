import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M32 32C32 14.33 46.33 0 64 0h256c17.7 0 32 14.33 32 32s-14.3 32-32 32h-29.5l11.4 148.2c36.7 19.9 65.6 53.2 79.5 94.7l1 3c3.2 9.7.7 20.5-5.3 28.8-5.2 8.4-14.8 13.3-25.1 13.3H32c-10.29 0-19.95-4.9-25.96-13.3-6.014-8.3-7.651-19.1-4.398-28.8l1.002-3c13.826-41.5 42.776-74.8 79.496-94.7L93.54 64H64c-17.67 0-32-14.33-32-32zm192 352v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h64z" />
  </svg>
);

const SvgThumbtackSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgThumbtackSolid;
